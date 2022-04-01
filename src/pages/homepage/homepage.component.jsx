import React, {useEffect, useState}from "react";
import Banner from "../../components/banner/banner.component";
import { HomePageContainer } from './homepage.styles'
import PropertiesPreview from '../../components/properties-preview/propertiesPreview.component'
import {fetchApi, baseUrl} from '../../utils/fetchApi'

const HomePage = () =>{ 
    const [propertiesForRent, setPropertiesForRent] = useState([])
    const [propertiesForSale, setPropertiesForSale] = useState([])

    useEffect(() =>{
        fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`).then(response =>setPropertiesForSale(response.hits))
        fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`).then(response => setPropertiesForRent(response.hits))
    }, [])
    return(
    <HomePageContainer>
        <Banner 
            title="RENT A HOME"
            subtitle="RENTAL HOMES FOR EVERYONE"
            description="Explore from Apartments, builder floors, villas and more"
            buttonText="EXPLORE RENTING"
            imageUrl="https://www.parkcityvacationrentals.com/wp-content/uploads/2020/01/Rental-Homes-in-Park-City-Utah-1.jpeg"
        />
        <PropertiesPreview properties={propertiesForRent} key="propertiesForSale"/>
        <Banner 
            title="BUY A HOME"
            subtitle="FIND YOUR DREAM HOME"
            description="Explore from Apartments, builder floors, villas and more"
            buttonText="EXPLORE BUYING"
            imageUrl="https://assets.themortgagereports.com/wp-content/uploads/2021/02/Is-now-A-Good-Time-To-BUy-A-House_.jpg"
        />
        <PropertiesPreview properties={propertiesForSale} key="propertiesForRent"/>
    </HomePageContainer>
)
}
export default HomePage;