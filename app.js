
// modules
const express = require("express");
const path = require("path");
const showBooks = require('./showBooks')
const deleteBook = require('./deleteBook')
const updateBook = require('./updateBook')
const registerBook = require('./registerBook')
const bodyParser = require('body-parser');

// app configuration
const app = express();
const port = process.env.PORT || "8000";
app.use(express.static(path.resolve(__dirname, 'views'))); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: ["application/json", "application/csp-report"] }));

// routes
app.get("/books",  (req, res) => {
   res.json(showBooks())
});

app.get("/edit", (req, res) => {
    res.sendFile(__dirname+"/views/updateBookPage.html")
});

app.post('/post/registerBook', (req, res) => {
    registerBook(req.body.title, req.body.author)
    res.redirect('/')
});

app.delete('/delete/:id', (req, res) => {
    deleteBook(req.params.id)
    res.send('sucessfully delete')
})

app.put('/update/:id', (req, res) => {
    updateBook(req.params.id, req.body)
})

// server activation
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});