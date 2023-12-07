const mongoose = require('mongoose');
const { Schema, model, ObjectId } = mongoose;
const Order = require('./order');

const CustomerSchema = Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    orders: [{type: ObjectId, ref: 'Order'}],
    cart: [{type: ObjectId, ref: 'Book'}]
});

const Customer = model('Customer', CustomerSchema);

module.exports = Customer;