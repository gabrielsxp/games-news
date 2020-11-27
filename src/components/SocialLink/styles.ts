import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import { SocialBannerProps } from 'components/SocialBanner'

export const Wrapper = styled.a<Pick<SocialBannerProps, 'color'>>`
  ${({ theme, color }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: ${theme.border.radius};
    background-color: ${lighten(0.2, theme.colors.secondary)};
    position: relative;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${color};
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    width: 2rem;
    height: 2rem;
    > svg {
      width: 100%;
      height: 100%;
      color: ${theme.colors.white};
    }
  `}
`
