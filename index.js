const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const customerRouter = require('./routes/customerRoutes');

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
app.use('/customer', customerRouter);

// book management show books
app.get("/showBooks", function (req, res) {
    const filePath = path.join(__dirname, 'views', 'bookManagement','showBooks.html');
    res.sendFile(filePath);
});

app.get('/browseBooks', (req, res) => {
    res.sendFile(`${__dirname}/views/browseBooks.html`, (err) => {
        if(err) {
            console.log('Error sending browseBooks.html: ', err);
        }
    });
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});
  
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.listen(process.env.PORT || SERVER_PORT, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
});



