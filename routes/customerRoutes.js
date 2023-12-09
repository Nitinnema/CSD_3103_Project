const express = require('express');
const customerRouter = express.Router();
const { addCustomer, validateCustomer, getCustomerOrders, getCustomerName} = require('../controllers/customerController');

customerRouter.post('/findCustomer', validateCustomer);
customerRouter.post('/addCustomer', addCustomer);
customerRouter.post('/customerOrders', getCustomerOrders);
customerRouter.get('/getCustomerName/:id', getCustomerName);

module.exports = customerRouter;
