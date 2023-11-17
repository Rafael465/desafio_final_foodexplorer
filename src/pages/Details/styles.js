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

    > main {
        grid-area: content;
    } 

`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;


    display: flex;
    flex-direction: column;

    #back {
        width: 316px;
        display: flex;

        margin-top: 36px;
    }

    #arrow {
        font-size: 32px;
    }

    > img {
        margin-top: 16px;
        width: 264px;
    }

    > h1 {
        margin-top: 16px;
        margin-bottom: 24px;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > p {
        font-size: 18px;
        text-align: center;
        margin-bottom: 24px;
        width: 316px;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    Section {
        margin-bottom: 24px;
    }

    .tags {
        display: flex;
        justify-content: space-around;
        width: 316px;
    }

    #buy {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 316px;

        margin-top: 24px;

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



`;