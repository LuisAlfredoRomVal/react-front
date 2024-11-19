"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'

interface NavItemProps{
    icon: ReactNode;
    path: string;
}


const NavItem = ({icon, path}: NavItemProps) => {
  const pathName = usePathname();
  return (
    <Link href={path} className={'w-full justify-center flex'}>
      <span className={pathName == path  ? "bg-orange-400  flex justify-center transition-colors py-2 rounded-md w-10/12 ": "py-2 w-10/12"}>{icon}</span>
    </Link>
  )
}

export default NavItem
