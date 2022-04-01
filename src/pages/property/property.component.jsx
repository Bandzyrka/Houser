import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import PropertyDetails from '../../components/property-details/property-details.component'
import {fetchApi, baseUrl} from '../../utils/fetchApi'

const PropertyPage = () =>
{
    const [property, setProperty] = useState()
    const { propertyId } = useParams()
    useEffect(() =>{
        fetchApi(`${baseUrl}/properties/detail?externalID=${propertyId}`).then(response =>setProperty(response))

   
    }, [propertyId, setProperty])
    return(
        property ? <PropertyDetails data = {property}/>: null
    )
}

export default PropertyPage