import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    height: 56px;
    border: 0;
    border-radius: 5px;

    &:disabled {
        opacity: 0.5;
    }
    
  
`;