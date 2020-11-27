import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 3rem;
    background-color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small};
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 3rem;
      height: 3rem;
      background-color: ${theme.colors.primary};
      clip-path: polygon(100% 0, 0 0, 50% 50%);
      bottom: -3rem;
    }
  `}
`

export const SectionTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: bold;
    color: ${theme.colors.white};
  `}
`
