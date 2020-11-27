import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 30% 70%;
    background-color: ${theme.colors.white};
    height: 10rem;
    overflow: hidden;
    > div > img {
      transition: all 0.5s ease;
    }
  `}
  &:hover > div > img {
    transform: scale(1.1);
  }
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
  `}
`

export const ContentTitle = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-weight: bold;
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxsmall};
    text-decoration: none;
    display: inline;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
    &:hover {
      text-decoration: underline;
    }
  `}
`
export const TimeContent = styled.div`
  ${({ theme }) => css`
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
      font-size: ${theme.font.sizes.small};
      color: ${lighten(0.2, theme.colors.secondary)};
    }
  `}
`
