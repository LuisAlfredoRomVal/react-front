import { Empleoyees } from "@/entities"
import { API_URL } from "@/constants"
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import authHeaders from "@/helpers/Auth.headers"

export default  async function EmpleoyeesLocation ({store}: {store: string | string[] | undefined}) {
    const res = await fetch(`${API_URL}/empleoyees/location/${store}`,{
        method: "GET",
        headers:{...authHeaders()},
        next:{
            tags: ["Dashboard:locations:empleoyees"]
        }
    })
    const data: Empleoyees[] = await res.json()    
        return data.map((employee: Empleoyees)=>{
            const fullname = employee.Empleoyename + " " + employee.EmpleoyelastName
            return (
                <Card className="mx-10 my-10">
                    <CardHeader>
                    <p className="w-full">Nombre: <b>{fullname}</b></p>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                    <p className="w-full">Email: <b>{employee.Empleoyeemail}</b></p>
                    <p className="w-full">Telefono: <b>{employee.EmpleoyePhoneNumber}</b></p>
                    </CardBody>

                </Card>
            )
        })
    

    
}