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
        // check if username exists in the db first
        const { username } = req.body;
        const foundCustomer = await Customer.findOne({username: username});
        if(foundCustomer) {
            res.status(500).json({error: 'Username is already in use, try another one.'});
        } else {
            const newCustomer = new Customer(req.body);
            await newCustomer.save();
            res.status(200).json({customer: newCustomer});
        }
    } catch(err) {
        res.status(500).json({error: 'Something went wrong, try again later.'});
    }
};


module.exports = { validateCustomer, addCustomer };
