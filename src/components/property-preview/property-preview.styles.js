import styled from 'styled-components'

export const PropertyPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 450px;
    font-weight: bold;
    background: white;
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    @media screen and (max-width: 800px){
        width: 320px;
    }
    
`
export const PropertyImageContainer = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    cursor: pointer;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`
export const PropertyTopSection = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    justify-content: space-between;    
`
export const PriceContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    gap: 5px;
    padding: 10px;
`
export const AgencyLogoContainer = styled.div`
    margin-top: 10px;
    margin-right: 10px;
    overflow: hidden;
    img{
        border-radius: 50%;
        width: 30px;
        height: 30px;
        object-fit: cover;
    }
`
export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    gap: 10px;
    padding: 10px;
    align-items: center;
    color: #00aeff;
    svg{
        font-size: 20px;
        filter: drop-shadow(3px 2px 3px rgb(0 0 0 / 0.3));
    }
`

export const DescriptionContainer = styled.div`
    width: 100%;
    height: 50px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px;
`
export const Divider = styled.hr`
    margin: 0 auto;
    width: 94%;
    border-top: 1px solid #8c8b8b;
`
