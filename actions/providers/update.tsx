"use server"
import { API_URL } from "@/constants";
import authHeaders from "@/helpers/Auth.headers";
import { revalidateTag } from "next/cache";

export default async function UpdateProcider(providerId: string, formData: FormData){
    let provider: any = {};

    for(const key of formData.keys()){
      provider[key] = formData.get(key)
    }
  
    const res = await fetch(`${API_URL}/providers/${providerId}`, {
      method: "PATCH",
      body: JSON.stringify(provider),
      headers: { ...authHeaders() ,
          "content-type": "application/json"
      },
    });
    if (res.status === 200) {
      revalidateTag("dashboard:providers");
    }
}