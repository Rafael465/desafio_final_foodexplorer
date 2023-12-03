import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBrakepoints";

export const Container = styled.div`
    grid-area: header;

    display: flex;
    justify-content: space-between;

    height: 114px;    

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    #top {
        display: flex;
        margin-top: 60px;
        gap: 8px;

        > img {
            width: 25px;
            height: 25px;
        }

        > h1 {
            font-size: 21px;
        }
    }

    .search {
        display: none;
    }

    #signOut {
        display: none;
    }
    
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {

        align-items: center;

        justify-content: center;
        gap: 32px;

        #top {
            margin-top: 0;
        }

        .search {
            display: block;
        }

        #signOut {

            display: flex;
            border: none;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            background-color: transparent;

            >svg {
                width: 32px;
                height: 32px;
            }
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        gap: 64px;
    }
`;

export const Nav = styled.div`

    margin-left: 28px;
    margin-top: 60px;

    

    svg {
        font-size: 24px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        
        display: none;
    }
`;



export const Notification = styled.div`

    .receipt {
        margin-right: 28px;
        margin-top: 60px;

        svg {
            font-size: 32px;
        }
    
        h2 {
            display: none;
        }      
    }

    .add {
        cursor: pointer;

        h2 {
            display: none;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        
        .receipt, .add {

            display: flex;
            align-items: center;
            
            gap: 8px;
            margin: 0;
            padding: 12px 32px;
            
            border-radius: 0.8rem;

            background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

            cursor: pointer;

            h2 {
                display: flex;
            }
        }

        .add {
            
        }
    }
`;