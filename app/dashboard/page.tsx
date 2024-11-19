import React from 'react';
import EmpleoyeesLocation from './@locations/_components/empleoyees.locations';
import { p } from 'framer-motion/client';

export default function Dashboard({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  
  return (
    <div className="h-full w-4/12 ">
      <div className='h-[90vh] overflow-hidden overflow-y-auto first:mt-0 last:mb-0'>
        {
          searchParams.store ? (
            <EmpleoyeesLocation store={searchParams?.store}/>
          ): <p className='mt-0'> Selecione una tienda para ver los empleados</p>
        }
        
      </div>
      
    </div>
  );
}
