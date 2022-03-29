import React from "react";
import {PropertyPreviewContainer, PropertyImageContainer, PropertyTopSection, DetailsContainer, DescriptionContainer, PriceContainer, AgencyLogoContainer} from './property-preview.styles'

import {BsCheckCircleFill} from 'react-icons/bs'
import {GrRestroom} from 'react-icons/gr'
import {FaBed} from 'react-icons/fa'
import {CgShapeSquare} from 'react-icons/cg'
const PropertyPreview = ({id, rooms, price, baths, area, title, coverPhoto: {url}, agency: {logoUrl}}) => (
    <PropertyPreviewContainer>
        <PropertyImageContainer src={url} /> 
          
         <PropertyTopSection>
            <PriceContainer> <BsCheckCircleFill /> {id} {price} </PriceContainer>
            <AgencyLogoContainer src={logoUrl} />
        </PropertyTopSection>
        <DetailsContainer>
            <FaBed/> {rooms} |
            <GrRestroom/>{baths} |
            <CgShapeSquare/> {area}
        </DetailsContainer>
        <DescriptionContainer>
            {title}
        </DescriptionContainer>
    </PropertyPreviewContainer>
)

export default PropertyPreview;