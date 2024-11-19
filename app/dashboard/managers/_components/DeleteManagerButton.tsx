import DeleteManagers from "@/actions/managers/delete"
import { Button } from "@nextui-org/button"
import { LuTrash } from "react-icons/lu"


export default function ManagerDeleteButtton({managerid}: {managerid: string}){
    const deleteByManagerId = DeleteManagers.bind(null, managerid)

    return (
        <form action={deleteByManagerId}>
            <Button type = "submit" color="danger">
                <LuTrash size={20}/>
            </Button>
        </form>
    )
}