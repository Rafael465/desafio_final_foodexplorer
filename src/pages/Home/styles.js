import styled from 'styled-components';

export const Container = styled.div`

    

`;

export const Form = styled.form`
    display: flex;

    margin-bottom: 62px;
    margin-left: 36px;
    margin-right: 16px;

    background-color: blue;

    #top {
        display: flex;
        align-items: center;
        justify-content: space-around;

        margin-top: 60px;

        width: 100%;
        


        height: 120px;
        
        background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));

        > img {
            position: absolute;
            left: 6px;
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

    h1 {
        font-size: 18px;
        margin-bottom: 24px;
    }

    .card {
        margin-left: 24px;
        margin-bottom: 24px;
    }

`;

export const Content = styled.form`
`;