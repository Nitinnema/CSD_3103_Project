let cart = []; // In-memory cart storage

// Add book to cart
const addToCart = (req, res) => {
    const { bookId, title, price } = req.body; // Assuming you send these details
    const book = { bookId, title, price };
    
    cart.push(book);
    res.status(200).send('Book added to cart!');
};

// Get cart contents
const getCart = (req, res) => {
    res.json(cart);
};

module.exports = {
    addToCart,
    getCart,
};