import styled, { css } from 'styled-components'

const wrapperModifiers = {
  error: () => css`
    color: var(--color-secondary);
    background: var(--color-accent);
    opacity: 1;
  `,

  success: () => css`
    color: var(--color-secondary);
    background: #71ff8e;
    opacity: 1;
  `,
}

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 80px;
  width: 100%;
  font-size: var(--font-size-sm);
  font-weight: bold;
  text-align: center;
  line-height: 1;

  opacity: 0;

  transition: all 750ms ease;

  ${({ status }) => css`
    ${!!status && wrapperModifiers[status]}
  `}
`
