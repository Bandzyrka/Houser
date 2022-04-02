import styled from 'styled-components'

export const PropertiesPreviewContainer = styled.div`
    display: grid;
    width: 90vw;
    align-self: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    @media screen and (max-width: 800px){
        grid-template-columns: 1fr 1fr ;
        gap: 5px;
    }
        
    
`   