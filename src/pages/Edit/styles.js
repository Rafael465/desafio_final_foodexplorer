import styled from "styled-components";

export const Container = styled.div`

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;

export const Content = styled.div`
    width: 100%;
    max-width: 50rem;


    margin: 0 auto;
    margin-top: 11px;

    display: flex;
    flex-direction: column;
    align-items: center;

    #top {
        width: 100%;
        max-width: 36rem;
        
        #back {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        svg {
            font-size: 35px;
            margin-left: -10px;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        > h1 {
            margin-top: 24px;
            margin-bottom: 24px;
            font-size: 32px;
        }
    }

    #divOne {
        width: 100%;
        max-width: 36rem;

        #image {
            width: 100%;
            max-width: 36rem;        
            height: 4.8rem;

            margin-bottom: 24px;

            border-radius: 0.8rem;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
            cursor: pointer;

            #select {
                height: 100%;

                display: flex;
                align-items: center;
                justify-content: center;

                gap: 10px;

                cursor: pointer;

                svg {
                    font-size: 2.4rem;
                }

                >h2 {
                    font-size: 1.4rem;
                }
            }

            #file {
                display: none;
            }        

        }

        .input {
            width: 100%;
            max-width: 36rem;

            margin-bottom: 24px;
            
            #name, #price, #description {
                height: 4.8rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
                background-color: ${({ theme }) => theme.COLORS.DARK_800};
            }
        }

        #typeInput {
            width: 100%;
            max-width: 36rem;

            margin-bottom: 24px;

            h2 {
                margin-bottom: 8px;
                color: ${({ theme }) => theme.COLORS.LIGHT_400};
            }

            select {
                width: 100%;
                padding: 1.4rem 1.2rem;

                border: none;
                border-radius: 0.8rem;

                cursor: pointer;
                appearance: none;

                color: ${({ theme }) => theme.COLORS.LIGHT_500};
                background-color: ${({ theme }) => theme.COLORS.DARK_800};
            }
        }
    }

    #divTwo {
        width: 100%;
        max-width: 36rem;
        
        .tags {
            width: 100%;
            max-width: 36rem;        
            
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            
            .item {
                width: 100%;
                max-width: 11.5rem;
    
            }
    
            .new {
                width: 100%;
                max-width: 11.5rem;
                background-color: transparent;
            }
        }

        #price {
            width: 100%;
            max-width: 36rem;

            margin-bottom: 24px;
            
            #priceInput {
                height: 4.8rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
                background-color: ${({ theme }) => theme.COLORS.DARK_800};
            }
        }
    }

    #description {
            width: 100%;
            max-width: 36rem;

            margin-bottom: 24px;
            
            #descriptionInput {
                height: 4.8rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
                background-color: ${({ theme }) => theme.COLORS.DARK_800};
            }
    }

    #buttons {
        width: 100%;
        max-width: 36rem;

        display: flex;
        justify-content: space-between;

        gap: 0.5rem;
        #delete {
            width: 100%;
            max-width: 160px;
            height: 48px;

            font-size: 14px;

            border: none;
            border-radius: 5px;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }

        #update {
            width: 100%;
            max-width: 17rem;
            height: 48px;
            margin-bottom: 50px;
        }
    }
`;

/*export const Image = styled.div`
    position: relative;
    margin: -124px auto 32px;

    width: 186px;
    height: 186px;

    > img {
        height: 186px;
        width: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: red;
        }
    }
`;*/