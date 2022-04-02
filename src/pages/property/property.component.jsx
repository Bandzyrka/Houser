import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import PropertyDetails from '../../components/property-details/property-details.component'
import {fetchApi, baseUrl} from '../../utils/fetchApi'
import {Spinner} from 'react-bootstrap'
const PropertyPage = () =>
{
    const [property, setProperty] = useState()
    const { propertyId } = useParams()
    useEffect(() =>{
        fetchApi(`${baseUrl}/properties/detail?externalID=${propertyId}`).then(response =>setProperty(response))

   
    }, [propertyId, setProperty])
    return(
        property ? <PropertyDetails data = {property}/>: <Spinner animation="border" style={{display: "table",margin: "200px auto"}}/>
    )
}

export default PropertyPage