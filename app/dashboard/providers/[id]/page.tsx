import { API_URL } from "@/constants";
import authHeaders from "@/helpers/Auth.headers";
import ProvidersCards from "../_components/ProvidersCard";
import { Product, Providers } from "@/entities";
import ProductCard from "./_components/ProductCard";
import Link from "next/link";
import FormCreateProviders from "../_components/FormCreateProviders";
import FormUpdateProvider from "./_components/FormUpdateProvider";

export default async function ProvidersPageDefault({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`${API_URL}/providers/${params.id}`, {
    method: "GET",
    headers: {
      ...authHeaders(),
    },
    next:{
      tags:[`dashboard:providers:${params.id}`]
    }
  });

  const provider: Providers = await res.json();

  return (
    <div className="flex flex-col pl-10 gap-10 h-[90vh] pt-10">
      <div className="flex flex-row items-center gap-10">
      <ProvidersCards providers={provider} />
      <FormUpdateProvider provider={provider} />
      </div>
      <div className="h-1 bg-orange-900 w-[85vw]" />
      <div className="flex flex-wrap gap-10">
        {provider?.products?.map((product: Product) => (
          <Link className="hover:scale-110 transition-all" href={{ pathname: `/dashboard/products/${product.productId}` }} key={product.productId}>
            <ProductCard key={product.productId} product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
