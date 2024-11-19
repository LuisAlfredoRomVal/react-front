"use server";

import { API_URL } from "@/constants";
import authHeaders from "@/helpers/Auth.headers";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function UpdateManagers(managerId: string, formData: FormData) {
    let manager: any = {};

    for (const key of formData.keys()) {
        manager[key] = formData.get(key);
    }

    manager['managerSalary'] = +manager["managerSalary"]; // Convierte a número correctamente
    manager.location = +manager.location; // Convierte a número
    if (!manager?.location) delete manager?.location;

    const res = await fetch(`${API_URL}/managers/${managerId}`, {
        method: "PATCH",
        body: JSON.stringify(manager),
        headers: {
            ...authHeaders(),
            "content-type": "application/json"
        }
    });

    if (res.status == 201) {
        revalidateTag("dashboard:managers");
        revalidateTag(`dashboard:managers:${managerId}`);
        redirect("/dashboard/managers");
    }
}
