// imports
const books = require('./books.json');
// const borrowings = require('../borrowings.json');
const fs = require("fs"); 

// exports function that calls a function that receives a string with bookId
module.exports = updateBook = (bookToUpdateId, newValues) => {
    updateBookInfo(bookToUpdateId, newValues.title, newValues.author);
}

function updateBookInfo(bookToUpdateId, title, author) {

    let booksInFile = [];
    // Read books.json file 
    fs.readFile("./books.json", function(err, data) {
        // Check for errors 
        if (err) throw err; 
        // Converting to JSON books file
        booksInFile = JSON.parse(data);

        for(let i=0; i < booksInFile.length; i++) {
            // if there's a match
            if(booksInFile[i].id === bookToUpdateId) {
                // updates information
                booksInFile[i].title = title;
                 booksInFile[i].author = author;

                // write on books.json updated books list
                fs.writeFile("./books.json", JSON.stringify(booksInFile, null, "  "), () => {});
            }      
        }
    });    

}