const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const BookSchema = Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
});

const Book = model('Book', BookSchema);

module.exports = Book;