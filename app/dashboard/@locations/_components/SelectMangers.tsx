'use client';

import { Select, SelectItem } from "@nextui-org/react";
import { Location, Manager } from '../../../../entities';

interface selectmanagersprops {
    managers: Manager[];
    locations: Location[];
    defaultManager?: string;
}

export default function SelectManger({ managers, locations, defaultManager }: selectmanagersprops) {
    const disabledKeys = locations.map((location: Location) => {
        if(location.manager?.managerId == defaultManager) return location.manager?.managerId;
    }).filter((managerId) => managerId !== undefined);
    
    return (
        <Select
            defaultSelectedKeys={defaultManager ? [defaultManager] : []}
            label="Manager"
            name="manager"
            disabledKeys={disabledKeys}
        >
            {managers.map((manager: Manager) => (
                <SelectItem key={manager.managerId}>{manager.managerFullName}</SelectItem>
            ))}
        </Select>
    );
}
