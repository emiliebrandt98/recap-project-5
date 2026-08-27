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
    --background-color-primary: #446e7c;
    --background-color-secondary: #445f67;
    --background-page: #f2f2f2;
    --background-card: rgb(119, 149, 159);
    --background-input: rgba(234, 228, 209, 0.98);
    --text-color-primary: #1c282b;
    --text-color-secondary: #394c51;
    --text-color-tertiary: #f2f2f2;
    --text-color-hover: #f7cb3a;
    --border-primary: #446e7c;
    --border-secondary: #E1AD01;
    --border-tertiary: #f2f2f2;
    --icon-border: #f7cb3a;
    --icon-fill: #f7cb3a;
  }
`;
