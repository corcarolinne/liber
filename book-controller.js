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
