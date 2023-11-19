import styled from 'styled-components';

export const Container = styled.div`

    display: flex;

    width: 100%;
    height: 100vh;

    justify-content: center;
    align-items: center;

`;

export const Form = styled.form`

    #top {

        display: flex;
        align-items: center;

        gap: 10px;

        img {
            width: 43px;
            height: 43px;
        }

        > h1 {
            font-size: 42px;
        }
    }

    #signup {

        > header {
            > h1 {
                visibility: hidden;
            }
        }
    
        > h2 {
            font-size: 1.6rem;
            margin-top: 32px;
            margin-bottom: 8px;
        }
    
        > button {
            margin-top: 32px;
        }

        #login {
        display: flex;
        margin-top: 32px;
        justify-content: center;
        font-size: 14px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    }

    @media (min-width: 900px) {

        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-evenly;

        
        #top {
            > h1 {
                margin-bottom: 0px;
            }
        }

        #signup {
            background-color: ${({ theme }) => theme.COLORS.DARK_700};
            padding: 64px;
            border-radius: 16px;

            > header {
                display: flex;
                justify-content: center;
                
                > h1 {
                    visibility: visible;
                }
            }

        }
        
    }

`;