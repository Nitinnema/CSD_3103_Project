const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Book = require('./book');

const OrderSchema = Schema({
    date: {
        type: Date,
        required: true
    },
    books: [{type: Book}]
});


const Order = model('Order', OrderSchema);

module.exports = Order;