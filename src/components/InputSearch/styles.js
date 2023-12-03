import styled from "styled-components";

export const Container = styled.div`
    min-width: 400px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 14px;
    border-radius: 8px;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: ${({ theme }) => theme.COLORS.DARK_900 };

    > input {
        width: 60%;
        padding: 12px 14px;

        color: ${({ theme }) => theme.COLORS.LIGHT_500 };
        background-color: ${({ theme }) => theme.COLORS.DARK_900 };
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }    
    }

    button {

        svg {
            font-size: 24px;
            color: ${({ theme }) => theme.COLORS.LIGHT_500 };
        }
    }

    > svg {
        margin-left: 16px;
    }

    @media (min-width: 900px) {
        width: 34.8rem;
    }
`;