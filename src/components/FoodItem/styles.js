import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    
    margin-bottom: 8px;
    border-radius: 10px;
    
    color: ${({ theme }) => theme.COLORS.GRAY_300};  
`;

export const Content = styled.div`
        display: flex;
        align-items: center;

        
        border-radius: 0.8rem;
        border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.CAKE_100}` : `none` };
        background-color: ${({ theme, $isNew }) => $isNew ? `transparent` : theme.COLORS.LIGHT_700 };        

        > button {
            border: none;
            background: none;

            width: 16px;
            height: 16px;

            margin-right: 5px;
        }
    
        .button-delete {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    
        .button-add {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};            
        }
    
        > input {
            height: 25px;
    
            padding: 16px 10px;
            font-size: 1.6rem;        
    
            border: none;
            border-radius: 0.8rem;
            background-color: transparent;
            
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
            &::placeholder {
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
            }
        }
`;