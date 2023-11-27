import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBrakepoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";    
`;

export const Form = styled.form`
    width: 100%;
    max-width: 400px;
    
    display: flex;
    margin: 0 auto;

    margin-bottom: 62px;

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
    width: 100%;
    width: 600px;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    margin: 0 auto;
    background-color: pink;
    
    .inner {
        display: flex;
        background-color: blue;
        width: 900px;
    }

    .item {
        pointer-events: none;
    }

    .carousel {
        cursor: grab;
        overflow: hidden;        
    }    
`;

