import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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
    > div {
      margin-bottom: ${theme.spacings.xsmall};
    }
    > div:last-child {
      margin-bottom: 0;
    }
  `}
`
