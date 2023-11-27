import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    max-width: 37rem;
    
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    height: 56px;
    border: 0;
    padding:0 56px;
    border-radius: 5px;

    &:disabled {
        opacity: 0.5;
    }
    
  
`;