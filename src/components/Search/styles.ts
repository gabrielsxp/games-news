import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const IconWrapper = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  ${({ theme }) => css`
    > svg {
      width: 100%;
      height: 100%;
      color: ${theme.colors.white};
    }
  `}
`
