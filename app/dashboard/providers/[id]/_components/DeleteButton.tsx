import DeleteProviders from '@/actions/providers/delete'
import { Button } from '@nextui-org/react'
import React from 'react'

const DeleteButton = ({providerId}: {providerId: string}) => {
    const deleteProviderbYid = DeleteProviders.bind(null, providerId)
  return (
    <form action={deleteProviderbYid}>
      <Button className='w-full' type="submit" color='danger'>
        Estoy seguro
      </Button>
    </form>
  )
}

export default DeleteButton;