const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const customerRouter = require('./routes/customerRoutes');
const orderRouter = require('./routes/orderRoutes');

const app = express();
const SERVER_PORT = 3000;
const SERVER_HOST = "localhost";
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/bookStore').then(() => {
    console.log("db connected");
}).catch((err) => {
    console.log(err);
});

app.use('/book', bookRoutes);
app.use('/customer', customerRouter);
app.use('/order', orderRouter);

/********* Book Management *********/
app.get("/showBooks", function (req, res) {
    const filePath = path.join(__dirname, 'views', 'bookManagement','showBooks.html');
    res.sendFile(filePath);
});

app.get('/addBook', (req, res) => {
    res.sendFile(`${__dirname}/views/bookManagement/addBook.html`, (err) => {
        if(err) {
            console.log('Error sending addBook.html: ', err);
        }
    });
});

/********* Customer Management *********/
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/customerManagement/login.html');
});

app.get('/signup', (req, res) => {
    res.sendFile(`${__dirname}/views/customerManagement/signup.html`, (err) => {
        if(err) {
            console.log('Error sending signup.html: ', err);
        }
    });
});

/********* Orders Management *********/
app.get("/showOrders", function (req, res) {
    const filePath = path.join(__dirname, 'views', 'orderManagement','showOrders.html');
    res.sendFile(filePath);
});

/********* Orders Management *********/
app.get("/showOrders", function (req, res) {
    const filePath = path.join(__dirname, 'views', 'orderManagement','showOrders.html');
    res.sendFile(filePath);
});

/*********Order Management *********/
app.get('/orderCart', (req, res) => {
    const filePath = path.join(__dirname, 'views', 'orderManagement', 'cart.html');
    res.sendFile(filePath);
});

app.listen(process.env.PORT || SERVER_PORT, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
});



