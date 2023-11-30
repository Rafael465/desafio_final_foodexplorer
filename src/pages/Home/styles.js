import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBrakepoints";

export const Container = styled.div`

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    "header"
    "content";

    margin: 0 auto;
`;

export const Form = styled.form`
    max-width: 27rem;
    
    display: flex;
    margin: 0 auto;

    margin-bottom: 62px;

   

    #top {
        height: 12rem;
        
        margin: 0 auto;
        margin-top: 60px;
        padding-right: 10px;

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
                font-size: 1.4rem;
                line-height: 140%;

                margin-bottom: 3px;
            }

            > p {
                font-family: 'Poppins', sans-serif;
                font-weight: 400;
                font-size: 1.0rem;
                line-height: 140%;
            }
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.ME}) {
        max-width: 32rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        max-width: 100%;

        #top {
            >div {
                >h1 {
                    font-size: 1.8rem;
                }

                >p {
                    font-size: 1.2rem;
                }
            }
        }
    }
`;

export const Content = styled.form`       
    width: 100%;

    max-width: 70rem;

    overflow-x: hidden;
    margin: 0 auto;

    
    .app {
        width: 100%;
        max-width: 70rem;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: column;
        margin-bottom: 24px;

        
    }

    .test {
        display: flex;
        transition: transform 0.5s ease-in-out;
        gap: 20px;
        overflow-x: hidden;
        
    }

    #arrows {
        display: flex;

        gap: 50px;

        margin-top: 10px;
    }

    .left {
       font-size: 24px;
       cursor: pointer;
    }

    .right {
       font-size: 24px;
       cursor: pointer;
    }
`;