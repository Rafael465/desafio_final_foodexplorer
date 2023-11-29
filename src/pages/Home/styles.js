import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBrakepoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    "header"
    "content";





`;

export const Form = styled.form`
    width: 100%;
    max-width: 27rem;
    
    display: flex;
    margin: 0 auto;

    margin-bottom: 62px;
    #top {
        height: 12rem;
        
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
`;

export const Content = styled.form`       
    
    .app {
        width: 100%;
        max-width: 30rem;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: column;
        margin-bottom: 24px;

        overflow: hidden;

        >h2 {
            width: 100%;
            margin-top: 12px;
            margin-bottom: 12px;
        }
    }

    .inner {    
        display: flex;
        flex-direction: row;

    }
    
    .item {
        padding: 12px;
        pointer-events: none;
    }

    .carousel {
        cursor: grab;
    }
`;