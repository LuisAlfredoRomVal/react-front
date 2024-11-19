import { API_URL } from '@/constants'
import authHeaders from '@/helpers/Auth.headers'
import React from 'react'
import { Manager } from '@/entities'
import { Card } from '@nextui-org/react'

const CountmManagersPage = async () => {
    const res = await fetch(`${API_URL}/manager`,{
        headers:{
            ...authHeaders()
        },
        next:{
            tags:["dashboard:managers"]
        }
    })
    const managers: Manager[] = await res.json()
    const countNoStore = managers.filter((manager: Manager) => !manager.location).length;
    let max: number = 0;
    let salary = 0;
    managers.forEach((manager: Manager)=>{
        if(manager.managerSalary> max) max = manager.managerSalary;
        salary+=manager.managerSalary;
    })
  return (
    <Card className='w-fit text-center px-2 py-4'>
        <h1>Hay {managers.length} Manger {managers.length > 1 ? "S": " " }</h1>
        <h1>Hay {countNoStore} Sin tienda </h1>
        <h1>El salario maximo es  {max}  </h1>
        <h1>El salario Promedio es  {(salary/managers.length).toFixed(2)}  </h1>



    </Card>
  )
}

export default  CountmManagersPage
