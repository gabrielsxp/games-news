import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: ${theme.spacings.xsmall};
  `}
`
