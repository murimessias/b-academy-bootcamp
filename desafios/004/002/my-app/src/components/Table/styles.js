import styled, { css } from 'styled-components'

export const Wrapper = styled.table`
  grid-area: table;

  thead {
    height: var(--spacings-md);
    width: 100%;

    color: var(--color-secondary);
    font-size: var(--font-sm);
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.25px;
  }

  th {
    background-color: var(--color-accent);

    &:last-child {
      width: 2rem;
      background-color: #f32f60;
    }
  }

  td {
    border-bottom: 1px solid var(--color-border);
    padding: var(--spacings-xs);

    img {
      width: 100%;
    }
  }
`

export const Button = styled.button`
  padding: var(--spacings-2xs);
  margin: 0 auto;

  color: var(--color-secondary);
  font-weight: bold;
  line-height: 1;

  background-color: var(--color-accent);

  transition: all 250ms ease;

  &:hover {
    background: #f32f60;
    color: var(--color-secondary);
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`

export const ImgDiv = styled.div`
  ${({ background }) => css`
    width: 24rem;
    height: 18rem;

    margin: 0 auto;

    background: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `}
`

export const ColorDiv = styled.div`
  ${({ bgColor }) => css`
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    background: ${bgColor};
    text-align: center;
  `}
`
