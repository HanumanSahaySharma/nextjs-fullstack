"use client";

import axios from "axios";
import { FormEvent, useState } from "react";
import ButtonLink from "../components/ButtonLink";

export default function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");

  const addProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`http://localhost:3000/api/products`, {
        title,
        price,
        color,
        category,
        brand,
      });
      if (response.status === 201) {
        alert("New product added successfully!");
        setTitle("");
        setPrice("");
        setColor("");
        setCategory("");
        setBrand("");
        setLoading(false)
      }  
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-5">
        <div className="w-2/6 mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="font-black text-2xl">New Product</h1>
            <ButtonLink url="/products" text="Back" />
          </div>
          <form
            onSubmit={(e) => addProduct(e)}
            className="bg-slate-100 shadow p-5 rounded mt-4"
          >
            {
              loading && <div
              role="status"
              className="mb-3 mx-auto bg-white p-2 rounded w-12 h-12"
            >
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            }
            <div className="mb-3">
              <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                type="text"
                className="bg-white border border-slate-400 rounded w-full py-1 px-2 text-gray-700 placeholder:text-gray-700 focus:outline-blue-400"
              />
            </div>
            <div className="mb-3">
              <input
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                id="price"
                type="number"
                className="bg-white border border-slate-400 rounded w-full py-1 px-2 text-gray-700 placeholder:text-gray-700 focus:outline-blue-400"
              />
            </div>
            <div className="mb-3">
              <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                id="color"
                className="bg-white border border-slate-400 rounded w-full py-1 px-1 text-gray-700 focus:outline-blue-400"
              >
                <option selected>Choose Color</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="gray">Gray</option>
                <option value="pink">Pink</option>
                <option value="black">Black</option>
              </select>
            </div>
            <div className="mb-3">
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-white border border-slate-400 rounded w-full py-1 px-1 text-gray-700 focus:outline-blue-400"
              >
                <option selected>Choose Category</option>
                <option value="smartphones">Smartphones</option>
                <option value="laptops">Laptops</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>
            <div className="mb-3">
              <select
                id="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="bg-white border border-slate-400 rounded w-full py-1 px-1 text-gray-700 focus:outline-blue-400"
              >
                <option selected>Choose Brand</option>
                <option value="apple">Apple</option>
                <option value="samsung">Samsung</option>
                <option value="mi">Mi</option>
                <option value="oneplus">OnePlus</option>
                <option value="dell">Dell</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-800 inline-flex text-white px-4 py-2 rounded"
            >
              Add New Product
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
