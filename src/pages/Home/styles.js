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
    max-width: 40rem;
    
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

export const Content = styled.form`
    width: 100%;
    width: 60rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    margin: 0 auto;
    margin-bottom: 24px;

    background-color: green;
    padding: 0 1.2rem;    
    
    .carousel {
        cursor: grab;
        overflow: hidden; 
        background-color: red;
        width: 32rem;
    }  

    .inner {
        display: flex;
        background-color: blue;
        width: 100%;

        gap: 16px;
    }
    
    .item {
        pointer-events: none;
        
    }
    
    > h2 {
        width: 100%;

        font-size: 18px;
        margin-top: 24px;
        margin-bottom: 24px;        
    }
`;

