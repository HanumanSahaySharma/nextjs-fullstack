import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionUri } from "@/db/index";
import { Product } from "@/db/model/product";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionUri);
    data = await Product.find();
  } catch (error) {
    data = { success: false };
  }
  return NextResponse.json({ result: data, success: true }, { status: 200 });
}

export async function POST(request) {
	const payload = await request.json()
	let result = []
	try {
		await mongoose.connect(connectionUri);
		const product = new Product(payload);
		result = await product.save();
	} catch (error) {
		console.log('Internal server error', error)
	}
	return NextResponse.json({ result, success: true }, { status: 201 })
}
