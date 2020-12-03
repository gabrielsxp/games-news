import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { rgba, lighten } from 'polished'

export const Wrapper = styled.main``

export const MidSection = styled.div`
  ${({ theme }) => css`
    display: grid;
    width: 100%;
    max-width: 100%;
    grid-template-columns: 75% 25%;
    grid-gap: ${theme.grid.gutter};
    padding-bottom: ${theme.spacings.large};
  `}

  ${media.lessThan('medium')`
    grid-template-columns: 100%;
  `}
`

export const Section = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} 0;
    > img {
      max-width: 100%;
      height: auto;
      width: 100%;
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`
export const SocialBannersContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;

    > a {
      margin-bottom: ${theme.spacings.xxsmall};
    }
    > a:last-child {
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`
export const SideCardsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    margin-bottom: ${theme.spacings.xsmall};
    > div {
      margin-bottom: ${theme.spacings.xsmall};
    }
    > div:last-child {
      margin-bottom: 0;
    }
  `}
`
export const PostContent = styled.article`
  min-height: 100vh;
  padding-top: 8rem;
  ${media.lessThan('medium')`
    padding-top: 4rem;
  `}
`
export const PostsContent = styled.article`
  min-height: 100vh;
  padding-top: 2rem;
  ${media.lessThan('medium')`
    padding-top: 4rem;
  `}
`
export const ContentTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-weight: bold;
    margin-bottom: ${theme.spacings.xxsmall};
    text-decoration: none;
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const ContentLede = styled.h2`
  ${({ theme }) => css`
    color: ${lighten(0.2, theme.colors.secondary)};
    margin-bottom: ${theme.spacings.small};
    text-decoration: none;
    font-size: ${theme.font.sizes.large};
  `}
`

export const TimeContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    & > svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${theme.colors.primary};
      margin-right: ${theme.spacings.xxsmall};
    }
    & > span {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.secondary};
    }
  `}
`
export const ShareWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    > button {
      margin-right: ${theme.spacings.xxsmall};
    }
    > span {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`
export const MetaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
export const AuthorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const AuthorWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.secondary};
    > span {
      font-weight: bold;
      margin-left: ${theme.spacings.xxsmall};
    }
    > svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${theme.colors.primary};
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`

export const Line = styled.hr`
  ${({ theme }) => css`
    border: none;
    border-top: 0.1rem solid ${rgba(theme.colors.secondary, 0.1)};
    margin: ${theme.spacings.xsmall} 0;
    width: 100%;
  `}
`
export const BodyWrapper = styled.div`
  position: relative;
  overflow: hidden;
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    p {
      line-height: 1.6rem;
      margin: ${theme.spacings.xxsmall} 0;
    }
    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      transition: all 0.3s ease;
      &:hover {
        text-decoration: underline;
      }
    }
    img {
      max-width: 1000px;
      margin: ${theme.spacings.xsmall} 0;
    }
    a {
      max-width: 100%;
    }
    li {
      margin: ${theme.spacings.xxsmall} 0;
    }
    iframe {
      width: 100%;
      min-height: 40rem;
    }

    ${media.lessThan('medium')`
      img {
        max-width: 100%;
      }
    `}
  `}
`
export const RelatedContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    padding-top: ${theme.spacings.small};
    grid-template-columns: repeat(1, 1fr);
    grid-gap: ${theme.grid.gutter};
    ${media.greaterThan('medium')`
    grid-template-columns: repeat(3, 1fr);
    `}
    margin-bottom: ${theme.spacings.medium};
  `}
`
export const PostsContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: ${theme.grid.gutter};
    ${media.greaterThan('medium')`
    grid-template-columns: repeat(2, 1fr);
    > div {
      height: 40rem;
    }
  `};
  `}
`
