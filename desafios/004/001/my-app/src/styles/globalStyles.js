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

    --spacings-2xs: 0.8rem;
    --spacings-xs: 1.6rem;
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

  ul,
  li {
    list-style: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;

    cursor: pointer;
  }

  /* ------ Typography ------ */
  h1 {
    font-size: var(--font-2xl);
  }

  h2 {
    font-size: var(--font-xl);
  }

  h3 {
    font-size: var(--font-lg);
  }

  h4 {
    font-size: var(--font-md);
  }

  h5 {
    font-size: var(--font-sm);
  }

  h6 {
    font-size: var(--font-xs);
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
  }

  a:hover {
    color: #b42146;
  }

  hr {
    height: 1px;
    width: 100%;
    border: none;

    background-color: var(--color-border);
  }

  /* ------ Basic Responsive Layout ------ */
  @media screen and (min-width: 1040px) {
    :root {
      --font-xs: 1.4rem;
      --font-sm: 1.6rem;
      --font-md: 1.8rem;
      --font-lg: 2rem;
      --font-2xl: 3.6rem;

      --spacings-2xs: 1.6rem;
      --spacings-sm: 3.2rem;
      --spacings-md: 4rem;
      --spacings-lg: 4.8rem;
      --spacings-xl: 5.6rem;
      --spacings-2xl: 6.4rem;
    }
  }
`

export default GlobalStyles
