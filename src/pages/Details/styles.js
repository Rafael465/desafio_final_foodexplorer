import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;

export const Content = styled.div`
    display: flex;
    align-items: center;

    flex-direction: column;

    .desktop {
        #back {
            width: 264px;
            display: flex;
    
            margin-top: 36px;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            
            #arrow {
                font-size: 32px;
            }
        }
    
        > img {
            margin-top: 16px;
            width: 264px;
        }
    }

    #description {
        width: 100%;
        max-width: 31rem;

        display: flex;
        align-items: center;
        margin: 0 auto;

        flex-direction: column;

        > h1 {
            margin-top: 16px;
            margin-bottom: 24px;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        > p {
            font-size: 18px;
            text-align: center;
            margin-bottom: 24px;
            width: 300px;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        #tags {
            width: 100%;
            max-width: 25rem;        
            
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;

            gap: 6px;
            padding: 5px 8px;
            margin-bottom: 24px;

            box-sizing: border-box;
            border-radius: 0.8rem;

            svg {
                display: none;
            }
            
            .item {
                width: 100%;
                max-width: 8rem;    
                height: 32px;
            }
        }

        #buy {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 316px;

            margin-top: 24px;
            margin-bottom: 50px;

            .custom-button .icon {
                display: flex;
                font-size: 21px;
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
            }

            > button {
                display: flex;
                text-align: center;
                align-items: center;
                justify-content: center;
                gap: 8px;
                width: 188px;
                height: 37px;
                font-size: 10px;
                padding: 0;
            }

            > h1 {
                font-size: 23px;
            }

            > svg {
                font-size: 27px;
            }
        }

        
    }

    @media (min-width: 1024px) {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: center;

        gap: 50px;
        margin-bottom: 50px;

        .desktop {

            >img {
                margin-top: 42px;
                width: 400px;
                
            }
            
        }

        #description {
            max-width: 58rem;

            align-items: start;
            margin: 0;
            #tags {
                max-width: 100%;

                padding: 0;
                gap: 15px;
                justify-content: flex-start;
            }

            > h1 {
                margin-top: 145px;
                display: flex;
                font-size: 4rem;
            }

            > p {
                width: 550px;
                
                font-size: 2.4rem;
                text-align: left;
            }

            #buy {
                margin-bottom: 0;
            }

        }
    }
`;