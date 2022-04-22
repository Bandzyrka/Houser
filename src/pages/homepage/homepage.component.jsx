import React, {useEffect, useState}from "react";
import Banner from "../../components/banner/banner.component";
import { HomePageContainer } from './homepage.styles'
import PropertiesPreview from '../../components/properties-preview/propertiesPreview.component'
import {fetchApi, baseUrl} from '../../utils/fetchApi'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner.component'

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
            url="/search?puropse=for-rent" 
             
        />
        {propertiesForRent.length !== 0 ? <PropertiesPreview properties={propertiesForRent} key="propertiesForSale"/> : <LoadingSpinner />}
        <Banner 
            title="BUY A HOME"
            subtitle="FIND YOUR DREAM HOME"
            description="Explore from Apartments, builder floors, villas and more"
            buttonText="EXPLORE BUYING"
            imageUrl="https://assets.themortgagereports.com/wp-content/uploads/2021/02/Is-now-A-Good-Time-To-BUy-A-House_.jpg"
            url="/search?puropse=for-sale"
        />
        {propertiesForSale.length !== 0 ? <PropertiesPreview properties={propertiesForSale} key="propertiesForRent"/>: <LoadingSpinner />}
    </HomePageContainer>
)
}
export default HomePage;