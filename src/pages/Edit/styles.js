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
    max-width: 80rem;

    margin: 0 auto;
    margin-top: 11px;

    display: flex;
    flex-direction: column;
    align-items: center;

    #top {
        width: 100%;
        
        #back {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-size: 22px;
        }

        > h1 {
            margin-top: 24px;
            margin-bottom: 24px;
            font-size: 32px;
        }
    }
  
    #image {
        width: 100%;
        max-width: 34rem;

        border-radius: 0.8rem;

        margin-bottom: 24px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        cursor: pointer;
        
        #select {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            cursor: pointer;

            svg {
                font-size: 24px;
            }
        }

        #file {
            display: none;
        }        
    }


    #nameDiv {
        width: 100%;
        max-width: 65rem;

        #name {
            margin-bottom: 24px;
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }
    }
    .inputs {
        background-color: green;

        width: 100%;
        max-width: 65rem;

        input {
            height: 48px;
        }

        

        #price {
            padding: 0;
            margin-bottom: 00px;
        
            background-color: ${({ theme }) => theme.COLORS.DARK_800}; 
        }

        #description {
            padding: 0;
            margin-bottom: 24px;
            
            background-color: ${({ theme }) => theme.COLORS.DARK_800}; 
        }

    }


    #type {
        width: 100%;

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

    .tags {
        display: flex;
        flex-wrap: wrap;
        max-width: 37rem;

        gap: 1rem;
        
        .new {
            width: 150px;
            background-color: transparent;
                            
        }
        .item {
            width: 150px;
        }
    }

    #buttons {
        display: flex;
        justify-content: center;

        gap: 32px;        

        #delete {
            width: 200px;
            height: 48px;

            font-size: 14px;

            border: none;
            border-radius: 5px;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }

        #update {
            height: 48px;
            margin-bottom: 50px;
        }
    }

`;

export const Image = styled.div`
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
`;