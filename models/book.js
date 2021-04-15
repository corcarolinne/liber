var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ 
    id: String,
    title: String,
    author: String, 
},
{ timestamps: true }
);

module.exports = mongoose.model('Book', userSchema);