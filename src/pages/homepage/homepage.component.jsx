import React from "react";
import Banner from "../../components/banner/banner.component";
import { HomePageContainer } from './homepage.styles'
const HomePage = () => (
    <HomePageContainer>
        <Banner 
            title="RENT A HOME"
            subtitle="RENTAL HOMES FOR EVERYONE"
            description="Explore from Apartments, builder floors, villas and more"
            buttonText="EXPLORE RENTING"
            imageUrl="https://www.parkcityvacationrentals.com/wp-content/uploads/2020/01/Rental-Homes-in-Park-City-Utah-1.jpeg"
        />
    </HomePageContainer>
    )

export default HomePage;