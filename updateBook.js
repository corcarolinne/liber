// imports
// const books = require('./books.json');
// const borrowings = require('../borrowings.json');
const fs = require("fs"); 

// exports function that calls a function that receives a string with bookId
module.exports = (bookToUpdateId, newValues) => {
  console.log('values to update book', bookToUpdateId, newValues.title, newValues.author)
}