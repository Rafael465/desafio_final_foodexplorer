import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBrakepoints";

export const Container = styled.div`
    align-items: center;
    
    border-radius: 10px;
    
    color: ${({ theme }) => theme.COLORS.GRAY_300}; 
    
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        margin-bottom: 0;
    }
`;

export const Content = styled.div`
        display: flex;
        align-items: center;

        

        border-radius: 0.8rem;
        border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.CAKE_100}` : `none` };
        background-color: ${({ theme, $isNew }) => $isNew ? `transparent` : theme.COLORS.LIGHT_600 };        

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
    
            font-size: 1.6rem;
            text-indent: 5px;

            border: none;
            border-radius: 0.8rem;
            background-color: transparent;
            
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
            &::placeholder {
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
            }
        }
`;