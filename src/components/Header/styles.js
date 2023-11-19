import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    display: flex;
    justify-content: space-between;

    height: 114px;
    

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    #top {
        display: flex;
        margin-top: 60px;
        gap: 8px;

        > img {
            width: 25px;
            height: 25px;
        }

        > h1 {
            font-size: 21px;
        }
    }

    .search {
        display: none;
    }
    
    @media (min-width: 1024px) {
        .search {
            display: block;
        }
    }
`;

export const Nav = styled.div`

    margin-left: 28px;
    margin-top: 60px;

    svg {
        font-size: 24px;
    }

    @media (min-width: 1024px) {
        display: none;
    }
`;



export const Notification = styled.div`

    margin-right: 28px;
    margin-top: 60px;


    svg {
        font-size: 32px;
    }

    @media (min-width: 1024px) {
        display: none;
    }
`;