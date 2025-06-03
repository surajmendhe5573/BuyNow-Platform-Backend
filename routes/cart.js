const express= require('express');
const authenticate= require('../middlewares/auth.middleware');
const { addToCart, getCartItems, updateCartItem, removeCartItem } = require('../controllers/cart.controller');
const router= express.Router();

router.post('/', authenticate, addToCart);
router.get('/', authenticate, getCartItems);
router.put('/:itemId', authenticate, updateCartItem);
router.delete('/:itemId', authenticate, removeCartItem);

module.exports= router;