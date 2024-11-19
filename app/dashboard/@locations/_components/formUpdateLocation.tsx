import { Button, Input, SelectSection } from "@nextui-org/react";
import { API_URL} from "@/constants";
import SelectManger from "./SelectMangers";
import authHeaders from "@/helpers/Auth.headers";
import { Location, Manager } from "@/entities";
import {UpdateLocation} from "@/actions/locations/update"

export default async function FormUpdateLocation({store}:  {store:  string | string[] | undefined  }){
    if(!store || store == undefined || typeof store === "object")return null;
    const updateWithStoreId = UpdateLocation.bind(null, store)
    const responseManagers = await fetch(`${API_URL}/manager`,{
        method: "GET",
        headers:{
            ...authHeaders()
        },
        next:{
            tags: ["Dashboard:Managers"]
        }
    })
    const dataMangers: Manager[] = await responseManagers.json();
    const responseLocation = await fetch(`${API_URL}/location`,{

        method: "GET",
        headers:{
            ...authHeaders()
        },
        next: {
            tags: ["Dashboard:locations", "Dashboard:locations:manager"]
        }
    })
    const dataLoctions: Location[] = await responseLocation.json();

    let foundLocation =dataLoctions.find((location)=>location.locationId=== +store) 
    let foundManager=dataMangers.find((manager)=>manager.managerId === foundLocation?.manager?.managerId)

    return (
        <form action={updateWithStoreId} className="bg-orange-400 py-2 px-2 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-xl text-white text-center">Crear Tiempo</h1>
            <Input required={true} defaultValue={foundLocation?.locationName} label="Nombre de tienda "  placeholder="Tienda 1" name="locationName"/>
            <Input required={true} defaultValue={foundLocation?.locationAddres} label="Direccion  " placeholder="Avenida de las Ciencias" name="locationAddres"/>
            <Input required={true} defaultValue={foundLocation?.locationLat[0].toString()} label="Latitud " placeholder="20" name="locationLat"/>
            <Input required={true} defaultValue={foundLocation?.locationLat[1].toString()} label="Longitud " placeholder="34" name="locationLng"/>
            <SelectManger defaultManager={foundManager?.managerId} managers={dataMangers}  locations={dataLoctions}/>
            <Button type="submit" color="primary">Actualizar</Button>
        </form>
    )
}