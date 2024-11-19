import {API_URL, TOKEN_NAME} from '@/constants'
import { Location } from '@/entities'
import SelectLocation from './_components/SelectLocations';
import LocationCard from './_components/Location.card';
import FormNewLocation from './_components/formNewLocation';
import DeleteLocationButton from './_components/DeleteLocationButton';
import authHeaders from '@/helpers/Auth.headers';
import UpdateLocation from './_components/updateLocation';
import FormUpdateLocation from './_components/formUpdateLocation';

const LocationsPage = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const res =  await fetch(`${API_URL}/location`,{
        headers: {
           ...authHeaders()
        },
        next:{
            tags: ["Dashboard:locations"]
        }
    })
    let data: Location[] = await res.json()
    data = [
        {locationId: 0, locationName: "Ninguna", locationLat: [0,0], locationAddres: ""},
        ...data

    ]
    return ( 
    <div className='w-8/12'> 
        <div className='w-full h-[90vh] flex flex-col items-center bg-red-50'>
            <div className='px-10 w-1/2 my-10'>
            <SelectLocation locations={data} store={searchParams?.store}/>
            </div>
            <div className='w-8/12'>
            <LocationCard store={searchParams.store}/>
            </div>
            <div className='w-6/12'>
                <FormNewLocation store={searchParams.store} />
            </div>
            <div className='flex flex-row flex-grow-0 gap-10 items-center'>
            <DeleteLocationButton store={searchParams.store}/>
            <UpdateLocation store={searchParams.store}>
                <FormUpdateLocation store={searchParams?.store}/>
            </UpdateLocation>
            </div>
        </div>
    </div>)
}

export default LocationsPage
