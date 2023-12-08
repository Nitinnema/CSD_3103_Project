const mongoose = require('mongoose');
const { Schema, model, ObjectId } = mongoose;
const Book = require('./book');

const OrderSchema = Schema({
    customer: {
        type: ObjectId,
        ref: 'Customer'
    },
    date: {
        type: Date,
        required: true
    },
    books: [],
    status: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
});


const Order = model('Order', OrderSchema);

module.exports = Order;