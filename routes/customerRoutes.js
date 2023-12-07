const express = require('express');
const customerRouter = express.Router();
const { addCustomer, validateCustomer } = require('../controllers/customerController');

customerRouter.get('/findCustomer', validateCustomer);
customerRouter.post('/addCustomer', addCustomer);

module.exports = customerRouter;
