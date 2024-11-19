"use server";

import { API_URL } from "@/constants";
import authHeaders from "@/helpers/Auth.headers";
import { revalidateTag } from "next/cache";

export default async function createProduct(formData: FormData){

let products: any = {}

    for (const key of formData.keys()) {
        if(!key.includes("$ACTION_ID")){
            products[key] = formData.get(key);
        }
        
    }
    products.price = +products.price;
    products.countSeal = +products.countSeal

    const res = await fetch(`${API_URL}/products`,{
        method: "POST",
        body: JSON.stringify(products),
        headers: {...authHeaders()}
    })
    if(await res.status==201){
        revalidateTag("dashbaord:products")
    }
}