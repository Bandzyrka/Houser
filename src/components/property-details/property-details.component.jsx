import React from 'react';
import {Carousel} from 'react-bootstrap'
import {BsCheckCircleFill} from 'react-icons/bs'
import {FaBed, FaBath} from 'react-icons/fa'
import {CgShapeSquare} from 'react-icons/cg'

import {Divider, PropertyDetailsContainer, PropertyFooterContainer, CarouselContainer, PropertyBodyContainer, DescriptionContainer, PropertyTitleContainer, PropertyIconsContainer} from './property-details.styles'
const PropertDetails = ({data: {photos, id, purpose, type, rooms, price, baths, area, description, agency, title}}) => (
    <PropertyDetailsContainer>
        <CarouselContainer >
        {
            photos.map(photo => (
                <Carousel.Item key={photo.id} interval={2500}>
                    <img src={photo.url} alt={photo.title}/>
                </Carousel.Item>
            ))
        }
        </CarouselContainer>
        <PropertyBodyContainer>
        
        <PropertyTitleContainer>
            <div><BsCheckCircleFill style={{color: "green"}}/> {title}</div> <div>{price} $ </div>
        </PropertyTitleContainer>
        <Divider/>
        <PropertyIconsContainer>
            <FaBed/> {rooms} 
            <FaBath />{baths} 
            <CgShapeSquare/> {area} m2
        </PropertyIconsContainer>
        <Divider />
        <DescriptionContainer>
            {description}
        </DescriptionContainer>
        </PropertyBodyContainer>
        
        <PropertyFooterContainer> 
            <div>TYPE: {type} </div> <div>PUROPSE: {purpose}</div>
        </PropertyFooterContainer>
    </PropertyDetailsContainer>
    )

export default PropertDetails