import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;

    
`;

export const Form = styled.form`

    margin-top: 158px;

    #signin {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    > h1 {
        margin-bottom: 73px;
    }

    > h2 {
        font-size: 16px;
        margin-top: 32px;
        margin-bottom: 8px;
    }

    > button {
        margin-top: 32px;
    }
`;

export const Links = styled.div`
    
    display: flex;
    font-size: 14px;
    margin-top: 32PX;
    justify-content: center;
    
`;