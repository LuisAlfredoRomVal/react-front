"use server";

import { API_URL } from "@/constants";
import authHeaders from "@/helpers/Auth.headers";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
export default async function DeleteManagers(managerId: string, formData: FormData){

let manager: any = {}

    for (const key of formData.keys()) {
        const value = formData.get(key);
        manager[key] = formData.get(key);

        
    }
    const res = await fetch(`${API_URL}/managers/${managerId}`,{
        method: "DELETE",
        body: JSON.stringify(manager),
        headers: {...authHeaders()}
    })
    console.log(res.status);
        if(res.status==201){
            revalidateTag("dashbaord:managers")
            redirect("/dashboard/managers")
        }
}