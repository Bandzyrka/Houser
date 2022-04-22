import styled from 'styled-components'
import {Button, Badge} from 'react-bootstrap'

export const BannerContainer = styled.div`
    display: flex;
    width: 800px;
    height: 300px;
    margin: 60px auto;
    @media screen and (max-width: 800px)
    { 
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: auto;
        width: auto;
    }

`
export const ImgContainer = styled.img`
    width: 100%;
    height: 300px;
    padding: 10px;
    
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 400px;
    height: 300px;
    
    
`
export const TitleContainer = styled(Badge)`
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    margin: 10px 0px;
`
export const SubtitleContainer = styled.div`
    color: black;
    font-weight: 700;
    font-size: 2.1rem;
    margin: 5px 0px;
    
`
export const DescriptionContainer = styled.div`
    font-weight: 350;
    font-size: 1.3rem;
    margin: 10px 0px;
`
export const ButtonContainer = styled(Button)`
    width: 150px;
    height: 30px;
    margin: 5px 0px;
    font-size: 12px;

`