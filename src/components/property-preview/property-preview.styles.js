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
    padding: 5px;
    width: 50%;
`
export const AgencyLogoContainer = styled.img`
    margin-top: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
`
export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30px;
    gap: 10px;
    padding: 5px;
    align-items: center;
`
export const DescriptionContainer = styled.div`
    width: 100%;
    height: 30px;
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
