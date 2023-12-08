const express = require('express');
const customerRouter = express.Router();
const { addCustomer, validateCustomer, getCustomerOrders } = require('../controllers/customerController');

customerRouter.post('/findCustomer', validateCustomer);
customerRouter.post('/addCustomer', addCustomer);
customerRouter.post('/customerOrders', getCustomerOrders);


module.exports = customerRouter;
