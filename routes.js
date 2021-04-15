const express = require('express');
const router = express.Router();

const bookCtrl = require('./book-controller');

router.get('/books', bookCtrl.getBooks);


module.exports = router;