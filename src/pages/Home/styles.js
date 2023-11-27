import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBrakepoints";

export const Container = styled.div`

    

`;

export const Form = styled.form`
    width: 100%;
    max-width: 400px;
    
    display: flex;
    margin: 0 auto;

    margin-bottom: 62px;

    background-color: green;
    

    #top {
        height: 120px;
        
        margin: 0 auto;
        margin-top: 60px;

        display: flex;
        align-items: center;
        justify-content: flex-end;

        
        background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));

        > img {
            width: 181px;
            height: 139px;
            
            margin-left: -30px;
            margin-bottom: 21px;
        }

        > div {

            > h1 {

                font-family: 'Poppins', sans-serif;
                font-weight: 600;
                font-size: 1.8rem;
                line-height: 140%;

                margin-bottom: 3px;
            }

            > p {
                font-family: 'Poppins', sans-serif;
                font-weight: 400;
                font-size: 1.2rem;
                line-height: 140%;
            }
        }

    }
`;

export const Menu = styled.ul`

    h1 {
        font-size: 18px;
        margin-bottom: 24px;
    }

    .card {
        margin-left: 24px;
        margin-bottom: 24px;
    }

`;

export const Content = styled.form`

    display: flex;
    flex-direction: column;

    overflow-y: scroll;
    overflow-x: scroll;


    Section {
        gap: 10px;
    }
`;