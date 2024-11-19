import React from 'react'
import NavItem from './navItem';
import { LuStore, LuUser, LuUsers, LuFrame , LuTruck, LuWheat} from 'react-icons/lu';
const Sidebar = () => {
  return (
    <nav className="w-1/12 h-[90vh] min-w-[8.3333%] bg-orange-200 flex flex-col items-center py-20 justify-center gap-10">
      <NavItem path="/dashboard" icon={<LuStore className='text-4xl'/>}/>
      <NavItem icon={<LuTruck className='text-4xl'/>} path='/dashboard/providers'/>
      <NavItem icon={<LuWheat className='text-4xl'/>} path='/dashboard/products'/>
      <NavItem icon={<LuUser className='text-4xl'/>} path='/dashboard/managers'/>
      <NavItem icon={<LuUsers className='text-4xl'/>} path='/dashboard/empleoyees'/>
    </nav>
  )
}
export default Sidebar
