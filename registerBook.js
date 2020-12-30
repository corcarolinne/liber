// this file contains the logic for register a book borrowed in the system (borrowings.json file)

// imports
const books = require('./books.json');
const fs = require("fs"); 

// exports function that calls a function that receives bookid and reader id entered by the user
module.exports = registerBook = (title, author) => {
    addBook(title, author);
}

// function to register borrow of a book
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