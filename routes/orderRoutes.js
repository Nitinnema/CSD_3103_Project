const express = require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/orderController');

// cart functions
orderRouter.post('/add-to-cart', orderController.addToCart);
orderRouter.get('/getBooks', orderController.getCart);
orderRouter.delete('/remove-from-cart/:id', orderController.removeFromCart);
orderRouter.delete('/empty-cart', orderController.emptyCart);

// order functions
orderRouter.post('/addOrder', orderController.addOrder);
orderRouter.get('/getOrders', orderController.getOrders);
orderRouter.get('/getAllOrders', orderController.getAllOrders);
orderRouter.put('/modifyStatus/:id', orderController.updateStatus);
orderRouter.delete('/removeOrder/:id', orderController.deleteOrder);

module.exports = orderRouter;