import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    background-color: green; //${({ theme }) => theme.COLORS.DARK_400}
`;

export const Content = styled.div`
    
    h1 {
        margin-top: 24px;
        margin-bottom: 36px;
        font-size: 32px;
    }

    h2 {
        margin-bottom: 16px;
    }

    #image {
        margin-bottom: 24px;
    }

    #name {
        margin-bottom: 24px;
    }

    #remove {
        background-color: blue;
        width: 100px;
    }

    #add {
        background-color: blue;
        width: 100px;
    }
    
   

                
            
     
`;