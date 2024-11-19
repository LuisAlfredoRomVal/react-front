import createProduct from "@/actions/product/create";
import { API_URL } from "@/constants";
import authHeaders from "@/helpers/Auth.headers";
import { Button, Input } from "@nextui-org/react";
import SelectProviders from "./_components/selectProviders";

const ProductMainPage = async () => {
  const responseProviders = await fetch(`${API_URL}/providers`, {
    headers: {
      ...authHeaders(),
    },
  });
  const providers = await responseProviders.json();
  return (
    <form action={createProduct} className="  px-10 justify-center pt-10">
      <div className="flex flex-col px-10 py-10 rounded-md gap-6 bg-orange-400">
        <h1 className="2xl font-bold text-white">Crear Producto</h1>
        <Input name="productName" label="Nombre" />
        <Input name="price" label="Precio" />
        <Input name="countSeal" label="Num de Sellos" />
        <SelectProviders providers={providers} /> 
        <Button type="submit" color="primary">
          Crear Producto
        </Button>
      </div>
    </form>
  );
};

export default ProductMainPage;
