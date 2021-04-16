var Book = require('./models/book')

exports.getBooks = function(req, res) {
  Book.find({}, function (err, books) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(books);
  }); 
};

exports.createBook = function(req, res) { 
    let newBook = new Book(req.body);
    newBook.save(function (err, book) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.redirect('/')
    });
};

exports.deleteBook = function(req, res) {
  Book.findByIdAndRemove({_id: req.params.id}, function (err, books) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(books);
  }); 
};

exports.updateBook = function(req, res) {
  Book.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, books) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(books);
  }); 
};
