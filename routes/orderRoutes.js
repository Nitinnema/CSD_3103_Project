const express = require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/orderController');

// cart functions
orderRouter.post('/add-to-cart', orderController.addToCart);
orderRouter.get('/getBooks', orderController.getCart);
orderRouter.delete('/remove-from-cart/:id', orderController.removeFromCart);

// order functions
orderRouter.post('/addOrder', orderController.addOrder);
orderRouter.get('/getOrders', orderController.getOrders);

module.exports = orderRouter;