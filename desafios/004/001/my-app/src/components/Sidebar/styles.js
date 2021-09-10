import styled from 'styled-components'

export const Wrapper = styled.aside`
  grid-area: sidebar;
  padding: var(--spacings-md);
  border-right: 1px solid var(--color-border);

  h3 {
    color: var(--color-accent);
  }
`

export const Item = styled.li`
  & + li {
    margin-top: var(--spacings-sm);
  }
`
