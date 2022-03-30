import React, {useEffect, useState}from "react";
import Banner from "../../components/banner/banner.component";
import { HomePageContainer } from './homepage.styles'
import PropertiesPreview from '../../components/properties-preview/propertiesPreview.component'
import {fetchApi, baseUrl} from '../../utils/fetchApi'

import NavBar from "../../components/nav-bar/nav-bar.component"
import Footer from "../../components/footer/footer.component"
const HomePage = () =>{ 
    const [propertiesForRent, setPropertiesForRent] = useState([])
    const [propertiesForSale, setPropertiesForSale] = useState([])

    useEffect(() =>{
        fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`).then(response =>setPropertiesForRent(response.hits))
        fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`).then(response => setPropertiesForSale(response.hits))
    }, [])
    return(
    <HomePageContainer>
        <NavBar />
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
            imageUrl="https://www.parkcityvacationrentals.com/wp-content/uploads/2020/01/Rental-Homes-in-Park-City-Utah-1.jpeg"
        />
        <PropertiesPreview properties={propertiesForSale} key="propertiesForRent"/>
        <Footer />
    </HomePageContainer>
)
}
export default HomePage;