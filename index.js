const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const SERVER_PORT = 3000;
const SERVER_HOST = "localhost";
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookStore').then(() => {
    console.log("db connected");
}).catch((err) => {
    console.log(err);
});

app.use('/book', bookRoutes);

app.get("/showBooks", function (req, res) {
    const filePath = path.join(__dirname, 'views', 'showBooks.html');
    res.sendFile(filePath);
});

app.get("/", function (req, res) {
    const filePath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(filePath);
});

app.listen(process.env.PORT || SERVER_PORT, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
});
