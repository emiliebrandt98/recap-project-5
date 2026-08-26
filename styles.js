import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  :root{
    --background-color-primary: #25373D;
    --background-color-secondary: #32484F;
    --text-color-primary: #f2bf16;
    --text-color-secondary: #E1AD01;
    --border-primary: #E1AD01;
    --icon-border: #E1AD01;
    --icon-fill: #E1AD01;
  }
`;
