import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { ArticleGridProps } from '.'

export const Wrapper = styled.div<Pick<ArticleGridProps, 'reduced'>>`
  ${({ reduced }) => css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: ${reduced ? '0.2rem' : '1rem'};
    height: auto;
    position: relative;
    ${({ theme }) => css`
      z-index: ${theme.layers.menu};
      padding-top: 5rem;
    `}

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(2, 1fr);
      padding-top: ${reduced ? '2rem' : '14rem'};
      height: auto;
      align-items: start;
  `}

    > div {
      height: 100%;
    }
  `}
`
export const SubWrapper = styled.div<Pick<ArticleGridProps, 'reduced'>>`
  ${({ reduced }) => css`
    display: flex;
    flex-direction: column;
    > div {
      margin-bottom: 1rem;
    }
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: ${reduced ? '0.2rem' : '1rem'};
      grid-template-columns: repeat(2, minmax(50%, auto));
      > div {
        height: 100%;
      }
  `}
  `}
`
