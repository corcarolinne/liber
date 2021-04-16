const http = require('http');
const logger = require('morgan');
const cors = require('cors');
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bookCtrl = require('./book-controller');

// app configuration
const app = express();
const port = process.env.PORT || 8000;
app.use(logger('tiny'));
app.use(express.static(path.resolve(__dirname, 'views'))); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: ["application/json", "application/csp-report"] }));

// routes
app.get('/books', bookCtrl.getBooks);
app.post('/registerBook', bookCtrl.createBook);
app.delete('/delete/:id', bookCtrl.deleteBook);
app.put('/update/:id', bookCtrl.updateBook);

// server activation
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

const dbURI = "mongodb+srv://test:cctdublin2020@cluster0.ay5gh.mongodb.net/iwa_ca2?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));
   
