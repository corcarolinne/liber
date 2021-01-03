// imports
const fs = require("fs"); 

// exporting books data read from JSON file
module.exports = showBooks = () => JSON.parse(fs.readFileSync("./books.json"))