const mongoose = require('mongoose');
const { Schema, model, ObjectId } = mongoose;
const Book = require('./book');

const OrderSchema = Schema({
    id: {
        type: Number, 
        required: true,
        unique: true
    },
    customer: {
        type: ObjectId,
        ref: 'Customer'
    },
    date: {
        type: Date,
        required: true
    },
    books: [{type: ObjectId, ref: 'Book'}],
    status: {
        type: String,
        required: true
    }
});


const Order = model('Order', OrderSchema);

module.exports = Order;