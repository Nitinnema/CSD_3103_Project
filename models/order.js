const mongoose = require('mongoose');
const { Schema, model, ObjectId } = mongoose;
const Book = require('./book');

const OrderSchema = Schema({
    date: {
        type: Date,
        required: true
    },
    books: [{type: ObjectId, ref: 'Book'}]
});


const Order = model('Order', OrderSchema);

module.exports = Order;