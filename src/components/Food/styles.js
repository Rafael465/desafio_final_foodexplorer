import styled from "styled-components";

export const Container = styled.div`
    width: 21rem;
    height: 29rem;


    border: none;
    border-radius: 0.8rem;
    
    
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    #heart {
        display: flex;
        justify-content: flex-end;
        

        padding-top: 10px;
        padding-right: 10px;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        >svg {
            font-size: 24px;
        }
    }

    #content {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 8.8rem;
        }
    
        #foodName {
            display: flex;
            align-items: center;
    
            margin: 1.2rem 0;
            > h1 {
                flex: 1;        
                text-align: left;
                
                font-size: 1.4rem;
                line-height: 2.4rem;
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
            }
    
            >svg {
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
            }
        }
    
        h2 {
            margin-bottom: 12px;
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
    
        #amount {
            display: flex;
            align-items: center;
            gap: 1.4rem;
    
            margin-bottom: 16px;
    
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    
        button {
            font-size: 1.4rem;
    
            height: 3.2rem;
            width: 16rem;
    
    
            border: none;
            border-radius: 0.8rem;
    
            background-color: red;
        }
    }
`;