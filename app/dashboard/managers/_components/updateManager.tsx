import { Manager } from "@/entities";
import UpdateManagers from "@/actions/managers/update";
import { Button, Input } from "@nextui-org/react";
import SelectStore from "../[id]/_components/SelectStoreManger";
import { API_URL } from "@/constants";
import authHeaders from "@/helpers/Auth.headers";
export default async function FormUpdateManager({ manager }: { manager: Manager }) {
  const updateMangaerById = UpdateManagers.bind(null, manager.managerId);
  const res = await fetch(`${API_URL}/locations`,{
    headers:{
      ...authHeaders()
    }
  })
  const stores = await res.json()
  return (
    <form action={updateMangaerById} className="bg-orange-400 rounded-md flex flex-col flex-grow-0 gap-2">
      <h1 className="text-2xl text-white font-semibold text-center"> Actualizar Manager </h1>
      <Input
        isRequired
        label="Nombre Completo"
        defaultValue={manager.managerFullName}
        placeholder="Marco Aureliio"
        name="mangerFullName"
      />
      <Input
        isRequired
        label="Correo Electronico"
        defaultValue={manager.managerEmail}
        placeholder="manger@ocso.com"
        name="MangerEmail"
      />
      <Input
        isRequired
        label="Salario"
        defaultValue={String(manager.managerSalary)}
        placeholder="12000"
        name="Manager Salary"
      />
      
      <Input
        isRequired
        label="Numero De Telefono"
        defaultValue={manager.managerPhoneNumber}
        placeholder="Manager Phone"
        name="Manager PhoneNumber"
      />
      <SelectStore stores={stores} defaultStore={manager?.location?.locationId}/>
      <Button color="primary" type="submit">
        Actualizar
      </Button>

    </form>
  );
}
