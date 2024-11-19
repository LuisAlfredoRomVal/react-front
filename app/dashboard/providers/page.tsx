import { API_URL } from "@/constants";
import { Providers } from "@/entities";
import authHeaders from "@/helpers/Auth.headers";
import ProvidersCards from "./_components/ProvidersCard";
import Link from "next/link";
import { LuPlus } from "react-icons/lu";
import { Button } from "@nextui-org/react";
import CreateProviders from "./_components/CreateProviders";
import FormCreateProviders from "./_components/FormCreateProviders";
export default async function ProviderPage() {
  const res = await fetch(`${API_URL}/providers`, {
    headers: {
      ...authHeaders(),
    },
    next:{
      tags:["dashboard:providers"]
    },
  });
  const provider: Providers[] = await res.json();
  return (
    <div className="flex flex-grow-0 flex-col h-[90vh] items-end w-full px-10 pt-10">
        <CreateProviders>
          <FormCreateProviders/>
        </CreateProviders>
      <div className="flex flex-wrap w-full flex-grow-0 gap-14 px-20 h-[90vh] ">
        {provider.map((provider: Providers) => (
          <Link
            className="hover:scale-110 transition-transform"
            href={{ pathname: `/dashboard/providers/${provider.providerId}` }}
          >
            <ProvidersCards providers={provider} key={provider.providerId} />
          </Link>
        ))}
      </div>
    </div>
  );
}
