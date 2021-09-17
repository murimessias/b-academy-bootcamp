import styled, { css } from 'styled-components'

const wrapperModifiers = {
  primary: () => css`
    color: var(--color-secondary);
    background: var(--color-accent);

    &:hover {
      background: #f32f60;
    }
  `,

  secondary: () => css`
    color: #505050;

    &:hover {
      background: var(--color-border);
    }
  `,
}

export const Wrapper = styled.button`
  padding: var(--spacings-xs) var(--spacings-md);
  font-size: var(--font-md);
  font-weight: bold;
  text-transform: capitalize;

  & + button {
    margin-left: var(--spacings-sm);
  }

  &:hover {
    transition: all 250ms ease;
  }

  ${({ kind }) => css`
    ${!!kind && wrapperModifiers[kind]}
  `}
`
