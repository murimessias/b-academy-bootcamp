import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  grid:
    'title title' auto
    'form table' auto
    / auto 1fr;
  gap: var(--spacings-md);
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  max-width: 140rem;
`
