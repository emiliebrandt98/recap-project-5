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
    background-color: var(--background-page)
  }

  :root{
    --background-color-primary: #25373D;
    --background-color-secondary: #32484F;
    --background-page: #879497;
    --background-card: #6F1333;
    --text-color-primary: #f2bf16;
    --text-color-secondary: #E1AD01;
    --border-primary: #25373D;
    --border-secondary: #E1AD01;
    --icon-border: #E1AD01;
    --icon-fill: #E1AD01;
  }
`;
