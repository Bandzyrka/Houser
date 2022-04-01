import React from "react"; 
import {BannerContainer, ButtonContainer,  TitleContainer, SubtitleContainer, DescriptionContainer, ImgContainer, TextContainer} from './banner.styles.js'
import {useNavigate} from 'react-router-dom'

const Banner = ({title, subtitle, description, imageUrl, buttonText, url, ...otherProps}) => {
    const navigate = useNavigate()
    return(
    <BannerContainer>
        <ImgContainer src={`${imageUrl}`} />
        <TextContainer>
            <TitleContainer bg="secondary" pill> {title} </TitleContainer>
            <SubtitleContainer> {subtitle} </SubtitleContainer>
            <DescriptionContainer> {description} </DescriptionContainer>
            <ButtonContainer variant="outline-primary" onClick={() => navigate(`${url}`)}> {buttonText} </ButtonContainer>
        </TextContainer>
    </BannerContainer>

)}
export default Banner;