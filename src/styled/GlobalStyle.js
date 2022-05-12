import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #f0f0f0;
  }
  body {
    background-color: ${({theme}) => theme.clr.main};
  }
`;

export default GlobalStyle;
