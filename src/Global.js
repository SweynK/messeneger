import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght,YOPQ@100..900,40..300&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
    }
    body{
        min-height: 100vh;
        background-color: #f7fafd;
        font-family: "Plus Jakarta Sans", sans-serif;;
    }
`;
