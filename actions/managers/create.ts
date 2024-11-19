"use server";

import { API_URL } from "@/constants";
import authHeaders from "@/helpers/Auth.headers";
import { revalidateTag } from "next/cache";

export default async function createManagers(formData: FormData){

let manager: any = {}

    for (const key of formData.keys()) {
        const value = formData.get(key);
        manager[key] = formData.get(key);

        
    }
    const res = await fetch(`${API_URL}/managers`,{
        method: "POST",
        body: JSON.stringify(manager),
        headers: {...authHeaders()}
    })
    if(await res.status==201){
        revalidateTag("dashbaord:managers")
    }
}