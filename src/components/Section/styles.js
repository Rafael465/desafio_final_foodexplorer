import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    background-color: green;

    div {
        display: flex;

        margin-top: 24px;
    }

    > h2 {
        margin-left: 24px;

        font-size: 20px;
        font-weight: 400;
        
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;