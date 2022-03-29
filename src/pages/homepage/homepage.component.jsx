import React from "react";
import Banner from "../../components/banner/banner.component";
import { HomePageContainer } from './homepage.styles'
import PropertiesPreview from '../../components/properties-preview/propertiesPreview.component'
import PROPERTIES_DATA from "./PROPERTIES_DATA"


const HomePage = () => 
{
    console.log(PROPERTIES_DATA.hits)
return(
    <HomePageContainer>
        <Banner 
            title="RENT A HOME"
            subtitle="RENTAL HOMES FOR EVERYONE"
            description="Explore from Apartments, builder floors, villas and more"
            buttonText="EXPLORE RENTING"
            imageUrl="https://www.parkcityvacationrentals.com/wp-content/uploads/2020/01/Rental-Homes-in-Park-City-Utah-1.jpeg"
        />
        <PropertiesPreview properties={PROPERTIES_DATA.hits}/>
    </HomePageContainer>
    )
}
export default HomePage;