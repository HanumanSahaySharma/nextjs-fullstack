import ButtonLink from "@/app/components/ButtonLink";
import axios from "axios";

const getProduct = async (id: string) => {
  try {
    const response = await axios.get(`${process.env.API_BASE_URL}/products/${id}`);
    if(response.status === 200) {
      return response.data.result;
    }
  } catch (error) {
    
  } 
}

export default async function page({ params }: any) {
  const product = await getProduct(params.id)
  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-5">
        <div className="w-2/6 mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="font-black text-2xl">{ product.title }</h1>
            <ButtonLink url="/products" text="Back" />
          </div>
        </div>
      </div>
    </main>
  );
}
