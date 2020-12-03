import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Wrapper = styled.main`
  position: relative;
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('/img/banner.webp');
    background-repeat: no-repeat;
    background-size: cover;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${({ theme }) => css`
      background-color: ${rgba(theme.colors.secondary, 0.8)};
    `}
  }

  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0;
  `}
`
