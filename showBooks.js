// imports
// const books = require('./books.json');
// const borrowings = require('../borrowings.json');
const fs = require("fs"); 

module.exports = showBooks = () => JSON.parse(fs.readFileSync("./books.json"))