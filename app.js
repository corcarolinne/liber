// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const showBooks = require('./showBooks')
/**
 * App Variables
 */

/**
 *  App Configuration
 */
const app = express();
const port = process.env.PORT || "8000";
app.use(express.static(path.resolve(__dirname, 'views'))); 
/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/books",  (req, res) => {
   res.json(showBooks())
});

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});