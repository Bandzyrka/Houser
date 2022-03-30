import React from "react";
import { PropertiesPreviewContainer } from "./propertiesPreview.styles"
import PropertyPreview from '../property-preview/property-preview'
const PropertiesPreview = ({properties}) => 
    {
    return (
        <PropertiesPreviewContainer>
        {
            Object.keys(properties).map(property => <PropertyPreview key={property} {...properties[property]} /> )
        } 
        </PropertiesPreviewContainer>
        )
            
            
}
export default PropertiesPreview;