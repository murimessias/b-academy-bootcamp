import styled from 'styled-components'

export const Wrapper = styled.main`
  grid-area: main;

  display: grid;
  grid-template-columns: 0.35fr 1fr;
  grid-template-areas: 'sidebar content';

  width: 100%;
`
