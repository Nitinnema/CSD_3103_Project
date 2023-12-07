const Customer = require('../models/customer');

const validateCustomer = async (req, res) => {
    try {
        const { username, password } = req.body;
        const foundCustomer = await Customer.findOne({username: username, password: password});
        res.status(200).json({customer: foundCustomer});
    } catch(err) {
        res.status(500).json({error: err});
    }
};

const addCustomer = async (req, res) => {
    try {
        const newCustomer = new Customer(req.body);
        await newCustomer.save();
        res.status(200).json({customer: newCustomer});
    } catch(err) {
        res.status(500).json({error: err});
    }
};


module.exports = { validateCustomer, addCustomer };
