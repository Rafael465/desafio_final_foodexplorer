import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 34.8rem;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_900 };
    color: ${({ theme }) => theme.COLORS.LIGHT_500 };

    border-radius: 8px;

    > input {
        width: 31.6rem;

        padding: 12px 14px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }    
    }

    > svg {
        margin-left: 16px;
    }

    @media (min-width: 900px) {
        width: 34.8rem;
    }
`;