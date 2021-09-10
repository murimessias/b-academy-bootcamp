import styled from 'styled-components'

export const Wrapper = styled.header`
  grid-area: header;
  height: var(--spacings-2xl);

  background-color: var(--color-accent);
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 120rem;

  font-size: var(--font-sm);
  font-weight: bold;
  color: var(--color-secondary);
  text-align: center;
  text-transform: uppercase;
`
