import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBrakepoints";

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`

    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 0 8px;

    #brand {
        max-width: 31.6rem;

        display: flex;
        align-items: center;
        flex-direction: column;
        
        margin-bottom: 73px;
        gap: 10px;

        img {
            width: 4.5rem;
            height: 4.3rem;
        }

        > h1 {
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 3.7rem;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
        #brand {
            width: 100%;

            flex-direction: row;            
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {

        width: 100%;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

        #brand {

            h1 {
                font-size: 4.2rem;
            }

            img {
                width: 4.9rem;
                height: 4.7rem;
            }
        }
    }
`;

export const Content = styled.div`

    width: 100%;
    max-width: 45rem;
    
    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 0 10px;

    header {
        > h1 {
            display: none;

            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 3.2rem;
        }
    }

    #in {
        width: 100%;

        input {
            height: 4.8rem;
            margin-bottom: 32px;
        }
    }
   
    #create {
        display: flex;
        justify-content: center;
        
        margin-top: 32px;

        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.4rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {

        max-width: 50rem;        

        padding: 64px;
        border-radius: 16px;
        
        background-color: ${({ theme }) => theme.COLORS.DARK_700};

        header {
            display: flex;
            justify-content: center;

            h1 {
                display: block;
                margin-bottom: 32px;
            }
         }
    }
`;