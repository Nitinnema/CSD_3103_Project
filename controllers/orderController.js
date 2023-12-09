const Order = require('../models/order');
const { updateCustomerOrders } = require('./customerController');
let cart = []; // In-memory cart storage

// Add book to cart
const addToCart = (req, res) => {
    const { bookId, title, price, quantity } = req.body; // Assuming you send these details
    const book = { bookId, title, price, quantity };
    cart.push(book);
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

const emptyCart = (req, res) => {
    cart = [];
    res.status(200).send('Cart emptied');
};

const addOrder = async (req, res) => {
    try {
        const books = cart;
        const { customer, totalPrice } = req.body;
        const date = new Date();
        const myDate = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`
        const status = 'Order placed';
        const newOrder = new Order({customer, books, date: myDate, status, totalPrice});
        await updateCustomerOrders(customer, newOrder);
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

const getAllOrders = async (req, res) => {
    try {
        const allOrders = await Order.find();
        res.status(200).json({orders: allOrders});
    } catch(err) {
        console.log('getOrders error: ', err);
        res.status(500).json({error: err});
    }
};

const updateStatus = async (req, res) => {
    try {
      const modifiedOrder = await Order.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { status: req.body.status } },
        { new: true }
      );
      if (modifiedOrder) {
        res.json(modifiedOrder);
      } else {
        res.status(404).send('Order not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  const deleteOrder = async (req, res) => {
    try {
      const deletedOrder = await Order.findOneAndDelete({ _id: req.params.id });
      if (deletedOrder) {
        res.json(deletedOrder);
      } else {
        res.status(404).send('Order not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

module.exports = {
    addToCart,
    getCart,
    removeFromCart,
    emptyCart,
    addOrder,
    getOrders,
    getAllOrders,
    updateStatus,
    deleteOrder
};