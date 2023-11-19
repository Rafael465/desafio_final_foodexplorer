import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 210px;
    height: 292px;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border-color: ${({ theme }) => theme.COLORS.DARK_300};
    border: 1px solid;

    img {
        width: 88px;
        margin-bottom: 12px;
    }

    #title {
        display: flex;
        align-items: center;

        margin-bottom: 12px;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    #buy {
        display: flex;
        align-items: center;

        margin-bottom: 16px;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .custom-button {
        width: 162px;
        height: 24px;
    }

    p {

        margin-bottom: 12px;

        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }


`;