import styled from 'styled-components'

export const PropertyPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 400px;
    font-weight: bold;
    @media screen and (max-width: 800px){
        width: 320px;
    }
    
`
export const PropertyImageContainer = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`
export const PropertyTopSection = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    justify-content: space-between;

    
`
export const PriceContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    gap: 5px;
    padding: 5px;
`
export const AgencyLogoContainer = styled.div`
    margin-top: 5px;
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
    height: 30px;
    gap: 10px;
    padding: 5px;
    align-items: center;
    color: #00aeff;
    svg{
        font-size: 20px;
    }
`

export const DescriptionContainer = styled.div`
    width: 100%;
    height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px;
`
