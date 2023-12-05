const express = require('express');
const bookRouter = express.Router();
const bookController = require('../controllers/bookController');

// Create a new user
bookRouter.post('/addBook', bookController.addBook);
bookRouter.get('/getBooks', bookController.getBooks);
bookRouter.delete('/removeBook/:id', bookController.deleteBook);
bookRouter.put('/modifyBook/:id', bookController.updateBook);

module.exports = bookRouter;
