import { Button } from "@nextui-org/react";
import { LuTrash } from "react-icons/lu";
import DeleteProducts from "@/actions/product/delet";
export default function DeleteProductsForms({productId}: {productId:string}){
    const deleteProductById = DeleteProducts.bind(null,productId )
    return(
        <form action={deleteProductById} className="flex w-full ">
            <Button color="danger" type="submit"> <LuTrash size={20}/></Button>

        </form>
    )
}