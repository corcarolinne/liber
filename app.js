// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const showBooks = require('./showBooks')
const registerBook = require('./registerBook')
const bodyParser = require('body-parser');
/**
 * App Variables
 */

/**
 *  App Configuration
 */
const app = express();
const port = process.env.PORT || "8000";
app.use(express.static(path.resolve(__dirname, 'views'))); 
app.use(bodyParser.urlencoded({ extended: true }));
/**
 * Routes Definitions
 */

app.get("/books",  (req, res) => {
   res.json(showBooks())
});

app.post('/post/registerBook', (req, res) => {
    registerBook(req.body.title, req.body.author)
    res.send('root')
});

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});