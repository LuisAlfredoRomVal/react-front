'use client';

import { Select, SelectItem } from "@nextui-org/react";
import { Providers } from "@/entities";

export default function SelectProviders({
  providers,
  defaultProvider,
}: {
  providers: Providers[];
  defaultProvider?: string;
}) {
  console.log("Proveedor por defecto:", defaultProvider);

  return (
    <Select
      defaultSelectedKeys={defaultProvider ? [defaultProvider] : undefined}
      label="Proveedor"
      name="providerId"
    >
      {providers.map((provider) => (
        <SelectItem
          key={provider.providerId}
          value={provider.providerId} 
        >
          {provider.providerName}
        </SelectItem>
      ))}
    </Select>
  );
}
