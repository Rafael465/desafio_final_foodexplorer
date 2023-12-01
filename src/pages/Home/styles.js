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

    max-width: 80rem;

    overflow-x: hidden;
    margin: 0 auto;

    .app {
        width: 100%;
        max-width: 80rem;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: column;
        margin-bottom: 24px;   
        
        >h2 {
            width: 100%;
            text-indent: 40px;

            font-size: 1.8rem;

            margin-bottom: 23px;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }

    .test {
        display: flex;
        transition: transform 0.5s ease-in-out;
        gap: 20px;
        overflow-x: hidden;    
        
        margin-bottom: 23px;
    }

    #arrows {
        width: 100%;
        max-width: 680px;
        display: flex;
        justify-content: space-between;

        margin-top: 10px;

        background-color: aqua;
    }

    #arrows::before, #arrows::after {
        content: "";
        margin-top: 160px;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 40px;
        z-index: 1;
        height: 1300px;
    }

    #arrows::before {          
        left: 0;
        background: linear-gradient(to left, transparent, ${({ theme }) => theme.COLORS.DARK_400});
    }

    #arrows::after {          
        right: 0;
        background: linear-gradient(to right, transparent, ${({ theme }) => theme.COLORS.DARK_400});
    }


    .left {
        position: relative;

        margin-top: -200px;
        cursor: pointer;
        
        z-index: 2;

        >svg {
            font-size: 50px;
        }
    }

    .left:hover, .right:hover {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    } 

    .right {
        position: relative;

        margin-top: -200px;
        cursor: pointer;
        z-index: 2;

       >svg {
            font-size: 50px;
        }
    }
`;