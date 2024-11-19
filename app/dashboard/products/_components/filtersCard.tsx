"use client";
import { Product, Providers } from "@/entities";
import Link from "next/link";
import ProductCard2 from "./ProductCard2";
import { useEffect, useState } from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";

export default function FilterCard({
  products,
  providers,
}: {
  products: Product[];
  providers: Providers[];
}) {
  const [filtered, setFilter] = useState<string>("");
  const [provider, setProvider] = useState<string>();
  const [productsList, setProductsList] = useState<Product[]>(products);
  const [show,setshow] = useState(false);

  useEffect(() => {
    const filteredProducts = products.filter((product: Product) => {
      if(
        product.productName.toLowerCase().includes(filtered.toLocaleLowerCase()) &&
        product.provider.providerId===provider
      ){
        return true;
      }
      else return false;

    });
    setProductsList(filteredProducts);
    setshow(true);
  }, [filtered, provider, products]);
  return (
    <div className="min-h-[90vh] max-h-[90vh] overflow-y-auto flex flex-col gap-4 border-r-orange-200 px-10 border-r-2 pt-10">
      <Select
        label="Proveedor"
        onChange={(e) => {
          setProvider(e.target.value);
        }}
      >
        {providers.map((provider) => (
          <SelectItem key={provider.providerId}>
            {provider.providerName}
          </SelectItem>
        ))}
      </Select>
      <Input
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        label="Nombre del Producto"
      />
      {show && productsList.map((product: Product) => (
        <Link
          href={{ pathname: `/dashboard/products/${product.productId}` }}
          key={product.productId}
        >
          <ProductCard2 product={product} />
        </Link>
      ))}
    </div>
  );
}
