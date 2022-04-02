import styled from 'styled-components'
import {Carousel} from 'react-bootstrap'

export const PropertyDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px auto;
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    width: 900px;
`
export const CarouselContainer = styled(Carousel)`
    width: 900px;
    height: 400px;
    overflow: hidden;
    img{
    width: 100%;
    height: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
`
export const PropertyBodyContainer = styled.div`
    width: 800px;
    
`
export const DescriptionContainer = styled.div`
    padding: 5px;
    text-align: left;
    font-size: 16px

`
export const PropertyTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    justify-content: space-between;
    gap: 5px;
    padding: 5px;
    
`
export const PropertyIconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    gap: 10px;
    padding: 5px;
    svg{
        font-size: 20px;
        color: #00aeff;
        filter: drop-shadow(3px 2px 3px rgb(0 0 0 / 0.3));
    }
`
export const PropertyFooterContainer = styled.div`
    display: flex;
    width: 800px;
    font-size: 20px;
    flex-direction: row;
    padding: 5px;
    font-weight: bold;
    justify-content: space-between;
`
export const Divider = styled.hr`
    margin: 0 auto;
    width: 94%;
    border-top: 1px solid #8c8b8b;
`
