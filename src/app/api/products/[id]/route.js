import mongoose from "mongoose";
import { connectionUri } from "@/db";
import { Product } from "@/db/model/product";
import { NextResponse } from "next/server";


export async function GET(request, content) {
    const productId = content.params.id;
    let product = []; 
    try {
        await mongoose.connect(connectionUri);
        product = await Product.findById(productId)
    } catch (error) {
        console.log('Internal server error', error)
    }
    return NextResponse.json({ result: product, success: true }, { status: 200 });
}


export async function PUT(request, content) {
    const payload = await request.json();
    const productId = { _id: content.params.id }
    let product; 
    let result; 
    try {
        await mongoose.connect(connectionUri);
        product = await Product.findOnedUpdate(productId, payload)
        result = await product.save();
    } catch (error) {
        console.log('Internal server error', error)
    }
    return NextResponse.json({ result, success: true }, { status: 200 });
}

export async function DELETE(request, content) {
    const productId = content.params.id;
    let product;
    let result;
    try {
        await mongoose.connect(connectionUri);
        product = await Product.findOneAndDelete(productId);
        result = await product.save();
    } catch (error) {
      console.log('Product not availble', error)  
    }
    return NextResponse.json({ result, success: true }, { status: 200 })
}