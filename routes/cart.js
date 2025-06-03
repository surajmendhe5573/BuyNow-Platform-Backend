const express= require('express');
const authenticate= require('../middlewares/auth.middleware');
const { addToCart, getCartItems } = require('../controllers/cart.controller');
const router= express.Router();

router.post('/', authenticate, addToCart);
router.get('/', authenticate, getCartItems);

module.exports= router;