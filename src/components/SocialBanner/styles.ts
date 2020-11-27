import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import { SocialBannerProps } from '.'

export const Wrapper = styled.a`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
  height: 5rem;
  width: 100%;
  text-decoration: none;
`

export const IconWrapper = styled.div<Pick<SocialBannerProps, 'color'>>`
  ${({ theme, color }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: ${lighten(0.1, color)};

    > svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${theme.colors.white};
    }
  `}
`

export const ContentWrapper = styled.div<Pick<SocialBannerProps, 'color'>>`
  ${({ theme, color }) => css`
    background-color: ${color};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    > p {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.white};
      font-weight: bold;
    }
  `}
`
