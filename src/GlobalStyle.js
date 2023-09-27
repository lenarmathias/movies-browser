import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.color.bgLightGrey};
    margin: 150px auto 103px;
    width: 1368px;
    max-width: 85%;
    font-family: "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;