const http = require('http');
const logger = require('morgan');
const cors = require('cors');
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const showBooks = require('./controllers/showBooks.js')
const deleteBook = require('./controllers/deleteBook.js')
const updateBook = require('./controllers/updateBook.js')
const registerBook = require('./controllers/registerBook.js')


// app configuration
const app = express();
const port = process.env.PORT || 8000;
app.use(logger('tiny'));
app.use(express.static(path.resolve(__dirname, 'views'))); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: ["application/json", "application/csp-report"] }));

// routes
app.get("/books",  (req, res) => {
   res.json(showBooks())
});

app.post('/post/registerBook', (req, res) => {
    registerBook(req.body.title, req.body.author)
    res.redirect('/')
});

app.delete('/delete/:id', (req, res) => {
    deleteBook(req.params.id)
    res.send('sucessfully deleted')
})

// app.get("/edit", (req, res) => {
//     res.sendFile(__dirname+"/views/updateBookPage.html")
//     res.send('sucessfully updated')
//     res.redirect('/')
// });

// app.put('/update/:id', (req, res) => {
//     updateBook(req.params.id, req.body)
// })

// server activation
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
