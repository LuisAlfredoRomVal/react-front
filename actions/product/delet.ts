"use server";

import { API_URL } from "@/constants";
import authHeaders from "@/helpers/Auth.headers";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
export default async function DeleteProducts(productId: string, formData: FormData){

let products: any = {}

    for (const key of formData.keys()) {
        const value = formData.get(key);
        products[key] = formData.get(key);

        
    }
    const res = await fetch(`${API_URL}/products/${productId}`,{
        method: "DELETE",
        headers: {...authHeaders()}
    })
    console.log(res.status);
        if(res.status==200){
            revalidateTag("dashbaord:products")
            redirect("/dashboard/products")
            
        }
}