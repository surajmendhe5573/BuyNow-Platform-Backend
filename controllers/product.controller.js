const Product= require('../models/product.model');

const addProduct= async(req, res)=>{
    try {
        const {name, description, price}= req.body;

        if(!req.user.isAdmin){
            return res.status(403).json({message: 'Access denied. Only admin can add products'});
        }

        const newProduct= new Product({
            name,
            description,
            price
        });

        await newProduct.save();
        res.status(201).json({message: 'Product added successfully', product:newProduct});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Internal server error'});
    }
};

const getProduct= async(req, res)=>{
    try {
        const products= await Product.find();

        if(products.length == 0){
            return res.status(404).json({message: 'Product not found'});
        }

        res.status(200).json({message: 'Products fetched successfully', products:products});
        
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
};

const getProductById= async(req, res)=>{
    try {
        const {id}= req.params;
        
        const product= await Product.findById(id);
        if(!product){
            return res.status(404).json({message: 'Product not found'});
        }

        res.status(200).json({message: 'Product fetched successfully', product:product});
        
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
};

const updateProduct= async(req, res)=>{
    try {
        const {name, description, price}= req.body;
        const {id}= req.params;

        if(!req.user.isAdmin){
            return res.status(403).json({message: 'Access denied. Only admin can update products'});
        }

        const updates= {};

        if(name) updates.name= name;
        if(description) updates.description= description;
        if(price) updates.price= price;

        const updateProduct= await Product.findByIdAndUpdate(id, updates, {new:true});
        if(!updateProduct){
            return res.status(404).json({message: 'Product not found'});
        }

        res.status(200).json({message: 'Product updated successfully', product:updateProduct});
        
    } catch (error) {
       return res.status(500).json({message: 'Internal server error'}); 
    }
};

const deleteProduct= async(req, res)=>{
    try {
        const {id}= req.params;

        if(!req.user.isAdmin){
            return res.status(403).json({message: 'Access denied. Only admin can delete products'});
        }

        const product= await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: 'Product not found'});
        }

        res.status(200).json({message: 'Product deleted successfully'});
        
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
};


module.exports= {addProduct, getProduct, getProductById, updateProduct, deleteProduct};