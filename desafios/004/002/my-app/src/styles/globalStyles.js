import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
    --color-accent: #ff3366;
    --color-primary: #000;
    --color-secondary: #fff;
    --color-text: #777;
    --color-border: #e6eaea;

    --font-xs: 1.2rem;
    --font-sm: 1.4rem;
    --font-md: 1.6rem;
    --font-lg: 1.8rem;
    --font-xl: 2rem;
    --font-xl: 3.2rem;

    --spacings-2xs: 0.8rem;
    --spacings-xs: 1.6rem;
    --spacings-sm: 2.4rem;
    --spacings-md: 3.2rem;
    --spacings-lg: 4rem;
    --spacings-xl: 4.8rem;
    --spacings-2xl: 5.6rem;
  }

  /* ------ Reset Styles ------ */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    min-height: 100vh;
  }

  body {
    font-family: 'Arial', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, sans-serif;
    font-size: var(--font-md);
    color: var(--color-text);
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
  }

  img {
    width: 100%;
    max-width: 36rem;
    height: auto;
  }

`

export default GlobalStyles
