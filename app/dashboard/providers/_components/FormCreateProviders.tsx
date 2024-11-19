import createProvider from "@/actions/providers/create";
import { Button, Input } from "@nextui-org/react";

export default function FormCreateProviders(){
    return(
        <form action={createProvider} className="bg-orange-400 rounded-md flex flex-col flex-grow-0 gap-2">
        <h1 className="text-2xl text-white font-semibold text-center"> Crear Proveedor</h1>
        <Input
          label="Nombre Provedor"
          placeholder="CocaCola"
          name="providerName"
        />
        <Input
          label="Correo Electronico de Provedor"
          placeholder="Cocacola@ocso.com"
          name="providerEmail"
        />
        <Input
          label="Telefono del Provedor"
          placeholder="442-256-5635"
          name="providerPhoneNumber"
        />
        <Button type="submit" color="primary">
          Crear Proveedor
        </Button>
  
      </form>
    )
   
}
