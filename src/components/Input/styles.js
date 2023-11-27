import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 60.6rem;
    display: flex;
    flex-direction: column;
    align-items: start;

    color: ${({ theme }) => theme.COLORS.LIGHT_400 };

    input {
        width: 100%;
        margin-top: 8px;
        margin-bottom: 32px;

        padding: 1.4rem 1.2rem;

        border: 0;
        border-radius: 0.8rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_400 };
        background-color: ${({ theme }) => theme.COLORS.DARK_900 };

        &::placeholder {
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-weight: 400;  

            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }    
    }
`;