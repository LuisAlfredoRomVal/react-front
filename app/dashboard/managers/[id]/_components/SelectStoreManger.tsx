import { Location } from "@/entities"
import { Select, SelectItem } from "@nextui-org/react"

export default function SelectStore({stores, defaultStore}: {stores: Location[], defaultStore: number}) {
    const validStores = Array.isArray(stores) ? stores : [];

    const disabledStores = validStores.map((store: Location) => {
        if(store.manager !== undefined && store.locationId !== defaultStore){
            return String(store.locationId);
        }
    }).filter((storeId) => storeId !== undefined);

    return (
        <Select label="Tienda" name="Location" defaultSelectedKeys={defaultStore ? String([defaultStore]) : undefined} disabledKeys={disabledStores}>
            {
                validStores.map((store: Location) => (
                    <SelectItem key={String(store.locationId)}>
                        {store.locationName}
                    </SelectItem>
                ))
            }
        </Select>
    )
}
