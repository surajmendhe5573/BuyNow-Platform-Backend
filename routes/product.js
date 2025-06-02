const express= require('express');
const authenticate= require('../middlewares/auth.middleware');
const { addProduct, getProduct, getProductById, updateProduct, deleteProduct } = require('../controllers/product.controller');
const router= express.Router();

router.post('/', authenticate, addProduct);
router.get('/', getProduct);
router.get('/:id', getProductById);
router.put('/:id', authenticate, updateProduct);
router.delete('/:id', authenticate, deleteProduct);


module.exports= router;