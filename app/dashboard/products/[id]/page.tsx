import { API_URL } from "@/constants";
import authHeaders from "@/helpers/Auth.headers";
import { Product, Providers } from "@/entities";
import UpdateProductsForms from "./_components/UpdateProductsForm";
import DeleteProducts from "@/actions/product/delet";
import DeleteProductsForms from "./_components/DeleteProducts";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`${API_URL}/products/${params.id}`, {
    headers: {
      ...authHeaders(),
    },
    next:{
      tags:[`dashboard:products:${params.id}`]
    }
  });
  const product = await res.json();
  
  const res2 = await fetch(`${API_URL}/providers/`, {
    headers: {
      ...authHeaders(),
    },
  });
  const providers: Providers[] = await res2.json();

  return (
    <div className="w-full">
      <div className="bg-orange-500">
      <h1 className="w-full font-bold text-white text-center text-2xl py-2">{product.productName}</h1>
      <h2 className="text-xl font-bold text-white text-center">Precio : {product.price}</h2>
      <h2 className="text-md font-bold text-white text-center py-2">Sellos: {product.countSeal}</h2>
      </div>
      
      <UpdateProductsForms product={product} providers={providers} />
      <div className="pl-10">
      <DeleteProductsForms productId={product.productId}/>
      </div>

    </div>
  );
};

export default ProductPage;
