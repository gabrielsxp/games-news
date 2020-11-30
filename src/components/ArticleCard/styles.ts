import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { lighten } from 'polished'
import { ArticleCardProps } from '.'

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

export const Wrapper = styled.div<Pick<ArticleCardProps, 'highlight'>>`
  text-decoration: none;
  ${({ theme, highlight }) => css`
    position: relative;
    width: 100%;
    height: ${highlight ? 'auto' : '50%'};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    border: ${theme.border.radius};
    margin-bottom: ${highlight ? theme.spacings.xxlarge : '0'};
    > img {
      position: relative;
      object-fit: cover;
      width: 100%;
      height: ${highlight ? '70%' : 'auto'};
      transition: all 0.5s ease;
    }
    &:hover {
      > img {
        transform: scale(1.1);
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
    margin: 0.5rem;
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
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall};
  `}
`
export const ContentTitle = styled.a<ContentTypeProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.secondary};
    font-weight: bold;
    margin-bottom: ${theme.spacings.xsmall};
    ${size && contentTypeModifier[size!](theme)};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `}
`
export const TimeContent = styled.div<Pick<ArticleCardProps, 'highlight'>>`
  ${({ theme, highlight }) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacings.xsmall};
    & > svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${theme.colors.primary};
      margin-right: ${theme.spacings.xxsmall};
    }
    & > span {
      font-size: ${highlight
        ? theme.font.sizes.small
        : theme.font.sizes.xsmall};
      color: ${theme.colors.secondary};
    }
  `}
`
export const LedeContent = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${lighten(0.2, theme.colors.secondary)};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`
