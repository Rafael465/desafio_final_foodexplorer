import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    
    .bottom {
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        height: 77px;
        width: 100%;

        margin-top: auto;

        display: flex;
        align-items: center;
        justify-content: space-around;

        > p {
            color: ${({ theme }) => theme.COLORS.LIGHT_200};
        }
    }

    #top {
        display: flex;
        gap: 10px;
        align-items: center;

        > img {
            width: 25px;
            height: 25px;
        }

        > p {
            font-size: 15px;
            color: ${({ theme }) => theme.COLORS.LIGHT_700};
        }
    }

    p {
        font-size: 12px;
    }    
`;