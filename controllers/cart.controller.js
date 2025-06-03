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

        if(!cart){
            return res.status(404).json({message: 'Cart items not found'});
        }

        res.status(200).json({message: 'Cart items fetched successfully', cart});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Internal server error'});
    }
};


module.exports= {addToCart, getCartItems};