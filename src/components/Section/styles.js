import styled from "styled-components";

export const Container = styled.section`
    
    div {        
        height: 40px;

        margin-top: 0px;

        border-radius: 0.8rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }

    > h2 {
        font-size: 2.0rem;
        font-weight: 400;
        
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;

export const TagsContainer = styled.div`

`;