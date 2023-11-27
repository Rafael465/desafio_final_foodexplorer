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
    width: 100%;
    max-width: 37rem;

    margin: 0 auto;
    margin-top: 11px;
    padding: 0 0.8rem;

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

        border-radius: 0.8rem;

        margin-bottom: 24px;
        padding: 12px 32px;

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

    #name {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        margin-bottom: 24px;
    }

    #type {
        width: 100%;

        margin-bottom: 24px;

        h2 {
            margin-bottom: 16px;
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

    Section {

        h2 {
            font-size: 1.6rem;
            
        }
        
        .tags {
            display: flex;
            flex-wrap: wrap;
            max-width: 37rem;
            

            .new {
                width: 140px;
                background-color: transparent;
                border: 1px dashed;
                border-color: aqua;
                border-image-slice: 100;
            }

            .item {
                background-color: blue;
                width: 150px;
            }
        }
    }

    #value {
        margin-top: 2.4rem;
        width: 100%;
    }

    #price {
        width: 100%;
        max-width: 37rem; 
        
        margin-bottom: 24px;
        
        display: flex;
        justify-content: center;
      
        background-color: ${({ theme }) => theme.COLORS.DARK_800};    
    }

    #description {
        width: 100%;
        max-width: 37rem;        
        
        display: flex;
        justify-content: center;

        margin-bottom: 24px;
        
        background-color: ${({ theme }) => theme.COLORS.DARK_800};        
    }

    #buttons {
        display: flex;
        align-items: center;

        background-color: blue;

        #delete {
            background-color: green;
        }

        #save {
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