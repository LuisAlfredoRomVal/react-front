import { API_URL } from "@/constants";
import { Product } from "@/entities";
import authHeaders from "@/helpers/Auth.headers";
import React from "react";
import FilterCard from "./_components/filtersCard";
import { ReactNode } from 'react';
const LayoutPage = async ({children}: {children: ReactNode }) => {
  try {
    const response = await fetch(`${API_URL}/products`, {
      headers: {
        ...authHeaders(),
        "Content-Type": "application/json",
      },
      next: {
        tags: ["dashboard:products"],
      },
    });

    if (!response.ok) {
      console.error("Failed to fetch products:", response.statusText);
      return <div>Error al cargar productos</div>;
    }

    const products: Product[] = await response.json();
    const responseProvider = await fetch (`${API_URL}/providers`,{
      headers:{
        ...authHeaders()
      },
      next:{
        tags:["dashboard:providers"]
      }
    })
    const provider = await responseProvider.json();
    return (
      <div className="h-[90vh] w-full flex flex-row">
        <div className="w-3/12 ">
          <FilterCard products={products} providers={provider} />
        </div>
        <div className="w-6/12">
            {children}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div>Error al cargar productos</div>;
  }
};

export default LayoutPage;
