import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.LIGHT_300 : theme.COLORS.TOMATO_100};

    border: none;
    font-size: 24px;
`;