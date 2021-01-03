// imports
const books = require('./books.json');
const fs = require("fs"); 

// exports function that calls a function that receives a string with bookId
module.exports = deleteBook = (bookId) => {
	deleteBookUsingId(bookId);
}

// function to delete book using id
function deleteBookUsingId(bookId) {
    let booksInFile = [];
    // Read books.json file 
    fs.readFile("./books.json", function(err, data) {
        // Check for errors 
        if (err) throw err; 
        // Converting to JSON books file
        booksInFile = JSON.parse(data);
        // loop through books in file
        for(let i=0; i < booksInFile.length; i++) {
            // if there's a match
            if(booksInFile[i].id === bookId) {
                // deletes it
                booksInFile.splice(i, 1);
                // write on books.json updated books list
                fs.writeFile("./books.json", JSON.stringify(booksInFile, null, "  "), () => {});
            }      
        }
    });    
}