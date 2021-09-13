import styled from 'styled-components'

export const Wrapper = styled.button`
  padding: var(--spacings-xs) var(--spacings-md);
  width: 100%;
  max-width: 40rem;

  font-size: var(--font-md);
  font-weight: bold;
  text-transform: capitalize;
  color: var(--color-accent);

  border: 2px solid var(--color-accent);
  background-color: transparent;

  transition: all 250ms ease;

  &:hover {
    background: #f32f60;
    color: var(--color-secondary);
  }
`
