import styled from "styled-components";

export const Container = styled.button`
    width: 21rem;
    height: 29rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 0.8rem;
    
    padding: 2.4rem;
    margin-bottom: 24px;
    margin-right: 24px;
    
    img {
        width: 8.8rem;
    }

    #foodName {
        display: flex;
        align-items: center;

        margin: 12px 0;
        
        > h1 {
            flex: 1;        
            text-align: left;
            
            font-size: 1.4rem;
            line-height: 2.4rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

    h2 {
        margin-bottom: 12px;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    #amount {
        display: flex;
        gap: 14px;

        margin-bottom: 16px;
    }
`;
    {/* 
        > footer {
            width: 100%;
        
            display: flex;
            
            margin-top: 24px;
        }
    */}