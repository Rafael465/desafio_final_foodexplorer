import styled from 'styled-components';

export const Container = styled.div`

`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    

    #top {
        display: flex;
        align-items: center;
        margin-top: 60px;

        width: 376px;


        height: 128px;
        
        background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));

        > img {
            margin-bottom: 21px;
            width: 191px;
            height: 149px;
        }

        > div {
            margin-top: 36px;

            > h1 {
                font-size: 18px;
            }

            > p {
                font-size: 12px;
            }
        }

    }
`;

export const Menu = styled.ul`


`;