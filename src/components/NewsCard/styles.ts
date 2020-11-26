import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { rgba } from 'polished'

type LabelProps = {
  color?: string
}

type ContentTypeProps = {
  size?: 'normal' | 'large'
}

const contentTypeModifier = {
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `
}

export const Wrapper = styled.div`
  text-decoration: none;
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    border: ${theme.border.radius};
    padding: ${theme.spacings.xsmall};
    > img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: all 0.5s ease;
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      ${({ theme }) => css`
        background-color: ${rgba(theme.colors.secondary, 0.5)};
        z-index: ${theme.layers.base};
      `}
    }
    &:hover {
      > img {
        transform: scale(1.1) rotate(5deg);
      }
    }

    ${media.lessThan('medium')`
      height: 40rem;
    `}
  `}
`
export const LabelsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  > div {
    margin: 1rem;
  }
  > div:first-of-type {
    margin-left: 0;
  }
  > div:last-of-type {
    margin-right: 0;
  }
`
export const Label = styled.div<LabelProps>`
  ${({ theme, color }) => css`
    background-color: ${color ? color : '#2196f3'};
    width: max-content;
    height: 3rem;
    padding: 0 ${theme.spacings.xsmall} 0 ${theme.spacings.xxsmall};
    clip-path: polygon(0 0, 0% 100%, 100% 100%, 100% 100%, 88% 50%, 100% 0);
    font-size: ${theme.font.sizes.xsmall};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${theme.colors.white};
  `}
`
export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  ${({ theme }) => css`
    z-index: ${theme.layers.menu};
  `}
`
export const ContentTitle = styled.a<ContentTypeProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.white};
    font-weight: bold;
    margin-bottom: ${theme.spacings.xsmall};
    ${size && contentTypeModifier[size!](theme)};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `}
`
export const TimeContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    & > svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${theme.colors.white};
      margin-right: ${theme.spacings.xxsmall};
    }
    & > span {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.white};
    }
  `}
`
