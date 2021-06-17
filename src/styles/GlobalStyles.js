import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body, #root {
        height: 100%;
        color: #333333;
    }

    *, button, input {
        border: none;
        outline: none;
        font-family: 'Open Sans', sans-serif;
    }

    button {
        cursor: pointer;
        
        background-color: #CDDC39;
        box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, .3);
        
        font-size: 20px;
        font-weight: 600;
        color: #333333;

        padding: 18px 50px;

        transition: filter .3s;

        &:hover {
            filter: brightness(1.08);
        }
    }
`;