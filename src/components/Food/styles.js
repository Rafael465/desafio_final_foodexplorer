import styled from "styled-components";

export const Container = styled.div`
    width: 21rem;
    height: 29rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    border: none;
    border-radius: 0.8rem;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    #heart {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        border: none;
        
        padding-top: 10px;
        padding-right: 20px;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        >svg {
            font-size: 24px;
        }
    }

    #edit {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        padding-top: 10px;
        padding-right: 20px;

        >button { 
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            background-color: transparent;

            border: none;
        }
        
    }

    #content {
        width: 100%;
        height: 100%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin-top: -34px;


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
    
        #include {

            .hide {
                display: none;
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
        
    }
`;