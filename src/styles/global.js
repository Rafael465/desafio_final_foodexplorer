import { createGlobalStyle } from 'styled-components';
import { DEVICE_BREAKPOINTS } from './deviceBrakepoints';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;        
    }

    :root {
        font-size: 62.5%;        

        @media (max-width: ${DEVICE_BREAKPOINTS}) {
            
        }
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        outline: none;
    }

    button {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.4rem;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    };

    button:hover, a:hover {
        filter: brightness(0.9);
    };
`;