import styled from 'styled-components'

export const Wrapper = styled.main`
  grid-area: content;
  padding: var(--spacings-xl);

  h1 {
    margin-bottom: var(--spacings-xs);
    color: var(--color-accent);
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: var(--spacings-xs) 0;
  }

  h2 {
    line-height: 1.15;
  }

  p {
    line-height: 1.5;
    hyphens: auto;

    & + p {
      margin-top: var(--spacings-xs);
    }
  }

  code {
    padding: 0.16rem 0.48rem;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    background-color: #dbdbdb;
  }

  article {
    max-width: 96rem;
  }

  time {
    display: block;
    margin: 2.4rem 0;
    padding-left: 1rem;

    font-size: var(--font-sm);
    font-weight: bold;

    border-left: 4px solid var(--color-accent);
  }

  blockquote {
    padding: var(--spacings-2xs) var(--spacings-sm);
    margin: var(--spacings-md) 0;

    font-style: italic;

    border-left: 4px solid var(--color-accent);
  }

  section {
    & + hr {
      margin: var(--spacings-lg) 0;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
`
