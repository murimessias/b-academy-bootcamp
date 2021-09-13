import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .error-message {
    width: 100%;
    max-width: 10rem;
    padding: 0.5rem;
    margin-top: 0.75em;

    font-size: 0.75rem;
    font-weight: bold;
    color: orangered;
    text-align: center;
    line-height: 1;

    border: 1px solid orangered;
    border-radius: 2px;
  }
`

export default GlobalStyles