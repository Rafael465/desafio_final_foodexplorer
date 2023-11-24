import styled from "styled-components";

export const Container = styled.button`
    width: 210px;
    height: 290px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 8px;
    
    padding: 24px;
    margin-bottom: 24px;
    margin-right: 24px;
    
    background-color: pink;

    img {
        width: 88px;
    }

    #foodName {
        display: flex;
        align-items: center;

        margin: 12px 0;
        
        > h1 {
            flex: 1;        
            text-align: left;
            
            font-size: 14px;
            line-height: 24px;
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