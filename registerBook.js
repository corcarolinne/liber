// imports
const books = require('./books.json');
const fs = require("fs"); 

// exports function that calls a function that receives title and author entered by the user
module.exports = registerBook = (title, author) => {
    addBook(title, author);
}

// function to register a book
function addBook(title, author) {
    // declarating array to hold books data
    let booksInFile = [];
    var alreadyExists =  true 
    // defining new book 
    let book = { 
        id: '_' + Math.random().toString(36).substr(2, 9), // to generate random ids automatically
        title: `${title}`, 
        author: `${author}` 
    }; 
    // Read books.json file
    fs.readFile("./books.json", function(err, data) {
        // Check for errors 
        if (err) throw err; 
        // Converting to JSON books already recorded
        booksInFile = JSON.parse(data);
         // logic to make sure ids are always different
        while (alreadyExists) {
            var newId = '_' + Math.random().toString(36).substr(2, 9)
            alreadyExists = !!booksInFile.find(book => book.id === newId)
        }
        // including new book in the array
        booksInFile.push(book);
        // rewriting borrowings file
        fs.writeFile('./books.json', JSON.stringify(booksInFile, null, "  "), err => {
            // Checking for errors 
            if (err) throw err;  
            console.log('Book was added sucessfully')
            });
    });   
}