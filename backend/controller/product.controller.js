import mongoose from "mongoose";
import Product from "../models/ProductModel.js"

export const getProduct = async (req,res) => {
    try {
        const Allproduct = await Product.find({});
        res.status(200).json({success:true, data:Allproduct});
    } catch (error) {
        console.error("Error in getting all Products", error);
        res.status(500).json({success:false, message:"Server Error"});
    }
};

export const createProduct = async (req,res) => {
    const product = req.body;
    if (!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message:"Provide all fields"});
    }
    try {
        const newProduct = new Product(product);
        await newProduct.save();
        return res.status(200).json({success:true,data:newProduct})    
    } catch (error) {
        console.error("Error in creating product",error);
    }
}

export const updateProduct = async (req,res) => {
    const {id} = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success:false,message:"Invalid Id"})
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true})
        return res.status(200).json({success:true,data:updatedProduct})
    } catch (error) {
        console.error("Error in updating product",error);
        res.status(500).json({success:false,message:"Server Error"})
    }
}

export const getProductById = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid){
        return res.status(404).json({sucess:false, message:"Invalid Id"})
    }
    try {
        const product = await Product.findById(id);
        if (!product){
            return res.status(400).json({sucess:false, message:"Product not found"});
        }
        return res.status(200).json({success:true,data:product});
    } catch (error) {
        console.error("Error in getting product by ID",error);
        return res.status(500).json({sucess:false,message:"Server Error"})
    }
    
};

export const deleteProduct = async (req,res) => {
    const {id} = req.params
    const productDlt = req.body;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id,productDlt)
        return res.status(200).json({success:true, message:"Product deleted"})
    } catch (error) {
        console.error("Error in deleting product",error);
        return res.status(500).json({success:false,message:"Server Error"})
    }
};