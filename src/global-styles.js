import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body{
    font-family: 'Helvetiva Neue', Helvetica, Arial, Helvetica, sans-serif, sans-serif;
    --webkit-font-smoothing: antialiased;
    --moz-osx-font-smoothing: grayscale;
    background-color: black;
    color: #333333;
    font-size: 1rem;
    margin: 0;
  }
`