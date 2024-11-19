import { Button, Input, SelectSection } from "@nextui-org/react";
import { API_URL} from "@/constants";
import SelectManger from "./SelectMangers";
import authHeaders from "@/helpers/Auth.headers";
import { Location, Manager } from "@/entities";
import createLocation from "@/actions/locations/create";
export default async function FormNewLocation({store}:  {store:  string | string[] | undefined  }){
    if(store) return null;

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
    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-2 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-xl text-white text-center">Crear Tiempo</h1>
            <Input label="Nombre de tienda "  placeholder="Tienda 1" name="locationName"/>
            <Input label="Direccion  " placeholder="Avenida de las Ciencias" name="locationAddres"/>
            <Input label="Latitud " placeholder="20" name="locationLat"/>
            <Input label="Longitud " placeholder="34" name="locationLng"/>
            <SelectManger managers={dataMangers}  locations={dataLoctions}/>
            <Button type="submit" color="primary"> subir</Button>
        </form>
    )
}