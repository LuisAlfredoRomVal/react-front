"use server";

import { API_URL } from "@/constants";
import authHeaders from "@/helpers/Auth.headers";
import { revalidateTag } from "next/cache";

export default async function createProvider(formData: FormData) {
  let provider: any = {};

  for(const key of formData.keys()){
    provider[key] = formData.get(key)
  }

  const res = await fetch(`${API_URL}/providers`, {
    method: "POST",
    body: JSON.stringify(provider),
    headers: { ...authHeaders() ,
        "content-type": "application/json"
    },
  });
  console.log(await res.json())
  if (res.status === 201) {
    revalidateTag("dashboard:providers");
  }
}
