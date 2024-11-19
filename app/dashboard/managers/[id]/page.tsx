import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import authHeaders from '@/helpers/Auth.headers';
import ManagerCardmini from "./_components/managerCardmini";
import ManagerDeleteButtton from "../_components/DeleteManagerButton";
import FormUpdateManager from "../_components/updateManager";
import ModalUpdatemanager from "./_components/ModalUpdateManger";
export default async function ManagerPage ({params}: {params: {id:string}}) {
    const res = await fetch (`${API_URL}/manager/${params.id}`,{
        headers:{
            ...authHeaders()
        },
        next:{
            tags: [`dashboard:managers:${params.id}`, "dashboard:managers"]
        }
    })
    const data: Manager = await res.json();
    return (
       <div className="flex flex-col gap-10 flex-grow-0 items-center justify-center">
        
        <ManagerCardmini manager={data}/>
        
        <div className="bg-gray-50 shadow-md rounded-md px-10 py-2 flex flex-row flex-grow-0 gap-2">
            <ModalUpdatemanager>
                <FormUpdateManager manager={data}/>
            </ModalUpdatemanager>
            <ManagerDeleteButtton managerid={data.managerId}/>
        </div>
       </div>
    )
}