import React from "react";
import {Divider, PropertyPreviewContainer, PropertyImageContainer, PropertyTopSection, DetailsContainer, DescriptionContainer, PriceContainer, AgencyLogoContainer} from './property-preview.styles'
import {BsCheckCircleFill} from 'react-icons/bs'
import {FaBed, FaBath} from 'react-icons/fa'
import {CgShapeSquare} from 'react-icons/cg'

import {useNavigate} from 'react-router-dom'

const PropertyPreview = ({ rooms, price, baths, area, externalID, title, coverPhoto, agency}) => {
    const navigate = useNavigate();
return(
    <PropertyPreviewContainer onClick={() => navigate(`/property/${externalID}`)}>
        <PropertyImageContainer src={coverPhoto.url} /> 
         <PropertyTopSection>
            <PriceContainer> <BsCheckCircleFill style={{color: "green", fontSize: 18}}/> {price} $ </PriceContainer>
            <AgencyLogoContainer>
                <img src ={agency.logo.url} alt=''/>
            </AgencyLogoContainer>
        </PropertyTopSection>
        <Divider />
        <DetailsContainer>
            <FaBed/> {rooms}
            <FaBath/>{baths}
            <CgShapeSquare/> {area}
        </DetailsContainer>
        <Divider />
        <DescriptionContainer>
            {title}
        </DescriptionContainer>
    </PropertyPreviewContainer>
)}

export default PropertyPreview;