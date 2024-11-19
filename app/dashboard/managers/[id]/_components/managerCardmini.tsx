import { Card, CardHeader, Divider, CardBody } from '@nextui-org/react';
import { data } from 'framer-motion/client';
import React from 'react';
import { Manager } from '@/entities';
import Link from 'next/link';

const ManagerCardmini = ({ manager }: { manager: Manager }) => {
  return (
    <Card className="mx-20 py-2 text-center justify-center">
      <CardHeader>
        <p className="w-full text-1xl">
          Nombre: <b>{manager.managerFullName}</b>
        </p>
      </CardHeader>
      <Divider />
      <CardBody className="flex items-center">
        <div>
          <p className="w-full">
            Email: <b>{manager.managerEmail}</b>
          </p>
          <p className='w-full'>
            Salario: <b> {manager.managerSalary}</b>
          </p>
          <p className="w-full">
            Teléfono: <b>{manager.managerPhoneNumber}</b>
          </p>
        </div>
        {manager.location ? (
          <p className='underline'>
            Tienda:{" "}
            <Link href={{ pathname: `/dashboard`, query: { store: manager?.location?.locationId } }}>
              {manager.location.locationName}
            </Link>
          </p>
        ) : (
          <p>No hay tienda</p>
        )}
      </CardBody>
    </Card>
  );
};

export default ManagerCardmini;
