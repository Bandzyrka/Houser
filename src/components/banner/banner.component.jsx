import React from "react"; 
import {BannerContainer, ButtonContainer,  TitleContainer, SubtitleContainer, DescriptionContainer, ImgContainer, TextContainer} from './banner.styles.js'

const Banner = ({title, subtitle, description, imageUrl, buttonText, ...otherProps}) => (
    <BannerContainer>
        <ImgContainer src={`${imageUrl}`} />
        <TextContainer>
            <TitleContainer bg="secondary" pill> {title} </TitleContainer>
            <SubtitleContainer> {subtitle} </SubtitleContainer>
            <DescriptionContainer> {description} </DescriptionContainer>
            <ButtonContainer variant="outline-primary"> {buttonText} </ButtonContainer>
        </TextContainer>
    </BannerContainer>

)

export default Banner;