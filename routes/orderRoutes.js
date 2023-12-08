const express = require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/orderController');

orderRouter.post('/add-to-cart', orderController.addToCart);
orderRouter.get('/getBooks', orderController.getCart);
orderRouter.delete('/remove-from-cart/:id', orderController.removeFromCart);

module.exports = orderRouter;