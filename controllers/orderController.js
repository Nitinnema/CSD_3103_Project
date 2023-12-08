const Order = require('../models/order');
let cart = []; // In-memory cart storage

// Add book to cart
const addToCart = (req, res) => {
    const { bookId, title, price, quantity } = req.body; // Assuming you send these details
    const book = { bookId, title, price, quantity };
    cart.push(book);
    console.log(cart);
    res.status(200).send('Book added to cart!');
};

// Get cart contents
const getCart = (req, res) => {
    res.json(cart);
};

const removeFromArrayById = (array, id) => {
    return array.filter(item => item.bookId !== id);
};

const removeFromCart = (req, res) => {
    const newArray = removeFromArrayById(cart, req.params.id);
    cart = newArray;
    res.status(200).send('Book removed to cart!');
}

const addOrder = async (req, res) => {
    try {
        const books = cart;
        const { customer, totalPrice } = req.body;
        const date = new Date().getDate();
        const status = 'Order placed';
        const newOrder = new Order({customer, books, date, status, totalPrice});
        await newOrder.save();
        res.status(200).json(newOrder);
    } catch(err) {
        console.log('addOrder error: ', err);
        res.status(500).json({error: err});
    }
};

const getOrders = async (req, res) => {
    try {
        const allOrders = await Order.find();
        res.status(200).json({orders: allOrders});
    } catch(err) {
        console.log('getOrders error: ', err);
        res.status(500).json({error: err});
    }
};

module.exports = {
    addToCart,
    getCart,
    removeFromCart,
    addOrder,
    getOrders
};