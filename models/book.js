const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const BookSchema = new Schema({
    bookName: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    bookPrice: {
        type: Number,
        required: true
    },    
    quantity: {
        type: Number,
        required: true
    },
    pages: {
        type: Number,
        required: true
    }
});

const Book = model('Book', BookSchema);

module.exports = Book;