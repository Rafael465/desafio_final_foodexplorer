import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBrakepoints";

export const Container = styled.div`
    grid-area: header;

    display: flex;
    justify-content: space-between;

    height: 114px;    

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    .menu {
        position: fixed;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        z-index: 3;
        transition: left 0.3s ease;
        
        background-color: ${({ theme }) => theme.COLORS.DARK_400};

        .hamburger {
            cursor: pointer;
        }
        
        .closeContent {
            width: 100%;
            height: 11rem;


            display: flex;
            align-items: flex-end;

            margin-bottom: 36px;

            background-color: ${({ theme }) => theme.COLORS.DARK_700};
            
            .close {
                display: flex;
                align-items: center;

                margin-left: 28px;
                margin-bottom: 24px;

                border: none;
                
                background-color: transparent;

                >svg{
                    font-size: 2.1rem;
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};
                }
    
                >h2 {
                    font-size: 2.1rem;
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};
                }
            }
        }

        .content {
            padding: 20px;
            padding-top: 0;

            .searchMenu {
                width: 100%;

                margin-bottom: 36px;

                position: relative;
                display: inline-block;

                .searchIcon {
                    position: absolute;

                    top: 50%;
                    left: 10px;
                    transform: translateY(-50%);
                    color: ${({ theme }) => theme.COLORS.LIGHT_500};
                }

                .search {
                    width: 100%;
                    height: 48px;

                    padding-left: 35px;
                    padding-right: 10px;
                    box-sizing: border-box;
        
                    border: none;
                    border-radius: 0.8rem;

                    color: ${({ theme }) => theme.COLORS.LIGHT_500};
                    background-color: ${({ theme }) => theme.COLORS.DARK_900};
                }
            }

            >h2 {
                font-size: 2.4rem;
                margin-bottom: 20px;

                cursor: pointer;
            }
        }
    }

    .menu.open {
        left: 0;
    }

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

    .searchContent {
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

        .searchContent {
            position: relative;
            display: inline-block;
            

            .searchIcon {
                position: absolute;

                top: 50%;
                left: 10px;
                transform: translateY(-50%);
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
            }

            .search {
                width: 300px;
                height: 38px;

                display: block;

                padding-left: 30px;
                padding-right: 10px;
                
                text-indent: 10px;
                
                border: none;
                border-radius: 0.8rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
                background-color: ${({ theme }) => theme.COLORS.DARK_800};
            }
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