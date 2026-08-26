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
    background-color: var(--background-page);
    padding: 20px 2rem;
  }

  :root{
    --background-color-primary: #25373D;
    --background-color-secondary: #32484F;
    --background-page: #879497;
    --background-card: #25373D;
    --background-input: rgba(234, 228, 209, 0.98);
    --text-color-primary: #fff8e1;
    --text-color-secondary: #dfd8bc;
    --text-color-hover: #E1AD01;
    --border-primary: #25373D;
    --border-secondary: #E1AD01;
    --border-tertiary: #fff8e1;
    --icon-border: #E1AD01;
    --icon-fill: #E1AD01;
  }
`;
