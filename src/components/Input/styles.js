import styled from "styled-components";

export const Container = styled.div`
    width: 316px;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_900 };
    color: ${({ theme }) => theme.COLORS.LIGHT_500 };

    border-radius: 8px;

    > input {
        height: 48px;
        width: 100%;

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
`;