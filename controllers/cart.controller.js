const Cart= require('../models/cart.model');

const addToCart= async(req, res)=>{
    try {
        const {productId, quantity}= req.body;
        const userId= req.user.id;

        let cart= await Cart.findOne({userId});      // Finds the cart for the user by their ID
        if(!cart){
            cart= new Cart({                // Creates a new cart if none exists
                userId,
                items: []
            })
        }

        const existingitem= cart.items.find(item=> item.productId.toString() === productId);  // Checks if the product already exists in the cart.


        if(existingitem){        // If product exists, update its quantity
            existingitem.quantity += quantity;
        }else{
            cart.items.push({productId, quantity});    // If product does not exist, add it to the cart
        }

        await cart.save();
        return res.status(201).json({message: 'Product added to cart', cart});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Internal server error'});
    }
};

const getCartItems= async(req, res)=>{
    try {
        const cart= await Cart.findOne({userId: req.user.id}).populate('userId', 'name email').populate('items.productId');

        if(!cart || cart.items.length == 0){
            return res.status(404).json({message: 'Cart items not found'});
        }

        res.status(200).json({message: 'Cart items fetched successfully', cart});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Internal server error'});
    }
};

const updateCartItem= async(req, res)=>{
    try {
        const {quantity}= req.body;
        const {itemId}= req.params;

        const cart= await Cart.findOne({userId: req.user.id});   // Finds the user's cart
        if(!cart){
            return res.status(404).json({message: 'Cart item not found'});
        }

        const item= cart.items.find(item=> item._id.toString() === itemId);  // Finds the specific item in the cart
        if(!item){
            return res.status(404).json({message: 'Item not found'});
        }

        item.quantity= quantity;
        await cart.save();

        res.status(200).json({message: 'Cart item updated successfully', item});
        
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
};

const removeCartItem= async(req, res)=>{
    try {
        const {itemId}= req.params;

        const cart= await Cart.findOne({userId: req.user.id});
        if(!cart){
            return res.status(404).json({message: 'Cart not found'});
        }

        const initialItemCount = cart.items.length;

        cart.items= cart.items.filter(item=> item._id.toString() !== itemId);   // Removes the specified item
        
        if (cart.items.length === initialItemCount) {
            return res.status(404).json({ message: 'Item not found in cart' });
        }

        await cart.save();
        res.status(200).json({ message: 'Item removed from cart successfully'});
        
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
};


module.exports= {addToCart, getCartItems, updateCartItem, removeCartItem};