import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: var(--spacings-md);
`

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  height: var(--spacings-md);
  width: 100%;

  color: var(--color-secondary);
  font-size: var(--font-sm);
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.25px;

  background-color: var(--color-accent);
`

export const Input = styled.input`
  width: 100%;
  height: var(--spacings-lg);
  padding: 0 var(--spacings-2xs);

  color: var(--color-text);
  font-size: var(--font-md);

  border-radius: 0;
  border: 1px solid var(--color-border);

  &:focus-visible {
    outline: 1px solid var(--color-accent);
    border-radius: 0;
  }
`
