import React from "react";
import Banner from "../../components/banner/banner.component";
import { HomePageContainer } from './homepage.styles'
import PropertiesPreview from '../../components/properties-preview/propertiesPreview.component'
import PROPERTIES_DATA from "./PROPERTIES_DATA"

import NavBar from "../../components/nav-bar/nav-bar.component"
import Footer from "../../components/footer/footer.component"
const HomePage = () => 
(
    <HomePageContainer>
        <NavBar />
        <Banner 
            title="RENT A HOME"
            subtitle="RENTAL HOMES FOR EVERYONE"
            description="Explore from Apartments, builder floors, villas and more"
            buttonText="EXPLORE RENTING"
            imageUrl="https://www.parkcityvacationrentals.com/wp-content/uploads/2020/01/Rental-Homes-in-Park-City-Utah-1.jpeg"
        />
        <PropertiesPreview properties={PROPERTIES_DATA.hits}/>
        <Banner 
            title="BUY A HOME"
            subtitle="FIND YOUR DREAM HOME"
            description="Explore from Apartments, builder floors, villas and more"
            buttonText="EXPLORE BUYING"
            imageUrl="https://www.parkcityvacationrentals.com/wp-content/uploads/2020/01/Rental-Homes-in-Park-City-Utah-1.jpeg"
        />
        <PropertiesPreview properties={PROPERTIES_DATA.hits}/>
        <Footer />
    </HomePageContainer>
)

export default HomePage;