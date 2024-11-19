"use server";

import { API_URL } from "@/constants";
import authHeaders from "@/helpers/Auth.headers";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { Location } from "@/entities";
export async function UpdateLocation(store : string, formData: FormData) {
    let location: any = {};
    let locationLatLng = [0, 0];
    
    for (const key of formData.keys()) {
        const value = formData.get(key);
        
        if (value) {
            if (key === "locationLat") {
                locationLatLng[0] = +value;
            } else if (key === "locationLng") {
                locationLatLng[1] = +value;
            } else {
                location[key] = value;
            }
        }
    }

    location.locationLatLng = locationLatLng;
    const res = await fetch(`${API_URL}/location/${store}`,{
        method: "PATCH",
        body: JSON.stringify(location),
        headers:{
            'content-type': 'application/json',
            ...authHeaders()
             
        }
    
    })
    const {locationId}: Location = await res.json();
    if(res.status==200){
        revalidateTag("dashboard:locations")
        revalidateTag(`dashboard:locations${store}`)

        redirect(`/dashboard?store${locationId}`);
    }
}
