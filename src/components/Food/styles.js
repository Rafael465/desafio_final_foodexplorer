import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBrakepoints";

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

        button {             
            border: none;
            
            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            cursor: pointer;

            >svg {
                font-size: 24px;
            }

            &:hover{
                color: ${({ theme }) => theme.COLORS.LIGHT_700};
            }
        }
    }    

    #content {
        width: 100%;
        height: 100%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 12px;
        padding-bottom: 20px;

        img {
            width: 8.8rem;
        }
    
        #foodName {
            display: flex;
            align-items: center;

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

        p {
            display: none;
        }
    
        h2 {
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
    
        #buy {
            
            #amount {
                display: flex;
                flex-direction: row;
                align-items: center;

                justify-content: center;
                
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

        .hidden {
            display: none;

            
        }
        
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 30rem;
        height: 46rem;

        #content {

            gap: 20px;

            img {
                width: 17rem;
            }

            #foodName {
            
                > h1 {
                    font-size: 2.4rem;
                    
                    color: ${({ theme }) => theme.COLORS.LIGHT_300};
                }
            }

            p {
                width: 28rem;

                display: flex;
                justify-content: center;

                font-size: 1.4rem;
                text-align: center;
                line-height: 160%;
            }

            h2 {
                font-size: 3.2rem;
            }

            #buy {

                display: flex;
                align-items: center;

                gap: 16px;

                #amount {

                    margin-bottom: 0;

                    h1 {
                        font-size: 2rem;
                    }
                }

                button {

                    width: 9.2rem;
                    height: 4.8rem;
                }

            }
        }
    }
`;