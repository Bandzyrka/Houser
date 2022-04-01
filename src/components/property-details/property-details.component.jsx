import React from 'react';
import {PropertyDetailsContainer} from './property-details.styles'
import {Carousel} from 'react-bootstrap'

const PropertDetails = ({data: {photos}}) => (
    <PropertyDetailsContainer>
        <Carousel>
        {
            photos.map(photo => (
                <Carousel.Item key={photo.id}>
                    <img className="d-block w-100" src={photo.url} alt={photo.title}/>
                </Carousel.Item>
            ))
        }
        </Carousel>
    </PropertyDetailsContainer>
)

export default PropertDetails