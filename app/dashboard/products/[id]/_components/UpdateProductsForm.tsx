import UpdateProducts from '@/actions/product/update';
import { Product, Providers } from '@/entities';
import { Button, Input } from '@nextui-org/react';
import React from 'react';
import SelectProviders from '../../_components/selectProviders';
import DeleteProductsForms from './DeleteProducts';

const UpdateProductsForms = ({ product, providers }: { product: Product; providers: Providers[] }) => {
  const { productId } = product;
  const updateProductswithId = UpdateProducts.bind(null, productId);
  console.log("")
  return (
    <form action={updateProductswithId} className='p-10 flex flex-col gap-2'>
      <Input defaultValue={product.productName} label="Nombre" name="productName" />
      <Input defaultValue={String(product.price)} label="Precio" name="price" />
      <Input defaultValue={String(product.countSeal)} label="Numero de Sellos" name="countSeal" />
      <SelectProviders providers={providers} defaultProvider={product.provider?.providerId} />
      <div className='flex flex-row flex-grow-0'>
      <Button type='submit' color="primary"> Guardar Cambios</Button>
      </div>
    

    </form>
  );
};

export default UpdateProductsForms;
