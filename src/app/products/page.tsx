import { Product } from "@/app/types";
import axios from "axios";
import { makeCapitalize } from "../utils";
import ButtonLink from "../components/ButtonLink";
import Button from "../components/Button";

const getProducts = async () => {
  try {
    const response = await axios.get(`${process.env.API_BASE_URL}/products`);
    if (response.status === 200) {
      return response.data.result;
    }
  } catch (error) {
    console.log("Error in fetching products", error);
  }
};

export default async function Products() {
  const products = await getProducts();
  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-5">
        <div className="flex items-center justify-between">
          <h1 className="font-black text-2xl">Products</h1>
          <ButtonLink url="addproduct" text="Add New Product" />
        </div>
        <div className="grid grid-cols-4 gap-4 my-5">
          {products?.map((product: Product) => (
            <div
              key={product._id}
              className="bg-white hover:bg-yellow-100 border border-slate-300 rounded p-3"
            >
              <h2 className="font-bold text-lg text-blue-800 mb-2">
                {product.title}
                <span className="bg-blue-100 text-blue-800 text-sm font-medium ml-2 px-1.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  {product.category && makeCapitalize(product.category)}
                </span>
              </h2>
              <h2 className="font-semibold mb-1">
                Price: <span className="font-bold">${product.price}</span> |
                Brand: {product.brand && makeCapitalize(product.brand)}
              </h2>
              <p className="font-semibold flex items-center">
                Color: {makeCapitalize(product.color)}
              </p>
              <div className="flex items-center">
                <ButtonLink
                  url={`/products/${product._id}/edit`}
                  text="Edit"
                  className="mr-2"
                />
                <ButtonLink
                  url={`/products/${product._id}`}
                  text="View"
                  className="mr-2"
                />
                <Button text="Delete" id={product._id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
