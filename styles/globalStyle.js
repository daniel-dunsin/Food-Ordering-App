import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'poppins';
        font-size: 1rem;
        background-color: #f8f8f8;
    }
`;
