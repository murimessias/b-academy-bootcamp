import styled from 'styled-components'

export const Wrapper = styled.menu``

export const Container = styled.div`
  grid-area: menu;

  display: flex;
  justify-content: center;
  align-items: center;

  height: var(--spacings-2xl);

  border-bottom: 1px solid var(--color-border);
`

export const Nav = styled.nav`
  height: 100%;
  max-width: 120rem;
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`

export const Item = styled.li`
  a {
    padding: var(--spacings-xs) var(--spacings-md);

    font-size: var(--font-sm);
    text-transform: uppercase;
    transition: all 250ms;

    &:hover {
      border-bottom: 3px solid var(--color-accent);
    }
  }
`
