import DeleteLocation from "@/actions/locations/delete";
import { LuTrash } from "react-icons/lu";

export default function SelectDeleteButton({ store }: { store: string | string[] | undefined }) {
    if (!store) return null;
    return (
        <form action={DeleteLocation} className="my-4">
            <button
                type="submit"
                name="DeleteValue"
                value={store}
                className="my-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
                <LuTrash size={20}/>
            </button>
        </form>
    );
}
