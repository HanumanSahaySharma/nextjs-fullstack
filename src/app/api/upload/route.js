import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(request) {
    const data = await request.formData();
    console.log(data)
    const file = data.get('file');
    if(!file) {
        return NextResponse.json({ message: "No image found!", success: false}, { status: 404 });
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/images/${file.name}`;
    await writeFile(path, buffer);
    return NextResponse.json({ message: 'File upload successfully.', success: true}, { status: 200 })
}