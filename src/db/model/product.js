import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    title: String,
    price: String,
    color: String,
    category: String,
    brand: String,
});

export const Product = mongoose.models.products || mongoose.model("products", productModel);