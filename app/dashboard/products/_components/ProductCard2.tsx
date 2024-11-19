import { Product } from '@/entities'
import { Card, CardBody, CardHeader, Divider, Link } from '@nextui-org/react';
import React from 'react'

const ProductCard2 = ({product}: {product: Product}) => {
  return (
    <Card className='max-w-[350px] '>
        <CardHeader>
            {product.productName}
        </CardHeader>
        <Divider/>
        <CardBody>
            <p>Nombre del Producto: <b>{product?.productName} </b></p>
            <p>Precio del Producto: {product?.price}</p>
            <p>Proveedor : <Link className='font-bold underline' href={`/dashboard/providers/${product.provider.providerId}`}>{product.provider.providerName} </Link></p>
        </CardBody>
      
    </Card>
  )
}

export default ProductCard2
