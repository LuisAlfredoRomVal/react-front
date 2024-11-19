'use client';

import { useState } from "react";
import { Location } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function SelectLocation({ locations,store }: { locations: Location[],store:string |string[] |undefined }) {
    const router = useRouter()
    
    return (
        <Select 
            placeholder="Selecciona una tienda"
            classNames={{
                mainWrapper: "hover:ring-2 ring-red-300 rounded-xl transition-all"
            }}
            selectedKeys={store ? store: "0"}
            label="Tienda"
            onChange={(e)=>{
                if(e.target.value == "0" || e.target.value == ""){
                    router.push("/dashboard");
                }
                else{
                    router.push(`/dashboard?store=${e.target.value}`)
                }
                }}
            
        >
            { 
                locations.map((location: Location) => (
                    <SelectItem key={location.locationId} value={location.locationId}>
                        {location.locationName}
                    </SelectItem>
                ))
            }
        </Select>
    );
}
