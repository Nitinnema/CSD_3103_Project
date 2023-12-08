let cart = []; // In-memory cart storage

// Add book to cart
const addToCart = (req, res) => {
    const { bookId, title, price, quantity } = req.body; // Assuming you send these details
    const book = { bookId, title, price, quantity };
    cart.push(book);
    res.status(200).send('Book added to cart!');
};

// Get cart contents
const getCart = (req, res) => {
    res.json(cart);
};

const removeFromArrayById = (array, id) => {
    return array.filter(item => item.bookId !== id);
};

const removeFromCart = (req, res) => {
    const newArray = removeFromArrayById(cart, req.params.id);
    cart = newArray;
    res.status(200).send('Book removed to cart!');
}

module.exports = {
    addToCart,
    getCart,
    removeFromCart,
};