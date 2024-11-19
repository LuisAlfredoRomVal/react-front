"use server";

import { API_URL } from "@/constants";
import authHeaders from "@/helpers/Auth.headers";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import ProvidersCards from '../../app/dashboard/providers/_components/ProvidersCard';

export default async function UpdateProducts(ProductId: string, formData: FormData) {
    let product: any = {};

    for (const key of formData.keys()) {
        if(!key.includes("ACTION")){
            product[key] = formData.get(key);
        }
    }
    product.price =+ product.price;
    product.countSeal =+ product.countSeal;
    const res = await fetch(`${API_URL}/products/${ProductId}`, {
        method: "PATCH",
        body: JSON.stringify(product),
        headers: {
            ...authHeaders(),
            "content-type": "application/json"
        }
    });

    if (res.status == 200) {
        revalidateTag("dashboard:products");
        revalidateTag(`dashboard:products:${ProductId}`);
    }
}
