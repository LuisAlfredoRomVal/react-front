'use client'
import { usePathname } from "next/navigation";
import Header from "./_components/Header";
import Sidebar from "./_components/sidebar/sidebar";
export default function Layout_dashboard({ children,locations }: Readonly<{ children: React.ReactNode, locations: React.ReactNode }>) {
    const path = usePathname();

    return (
        <div className=" bg-orange-50">
            <Header/>
            <div className="flex flex-row items-center">
                <Sidebar/>
                {children}   
                {path === "/dashboard" ? locations: null}

            </div>
            
        </div>
    );
}
