import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const MidSection = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 75% 25%;
    grid-gap: ${theme.grid.gutter};
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
      margin-bottom: 0;
    }
  `}
`
