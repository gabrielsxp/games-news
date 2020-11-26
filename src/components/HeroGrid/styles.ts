import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  height: 65rem;
  position: relative;
  ${({ theme }) => css`
    z-index: ${theme.layers.menu};
    padding-top: 5rem;
  `}

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(2, 1fr);
    padding-top: 14rem;
  `}

  > div {
    height: 100%;
  }
`
export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 1rem;
  }
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
    grid-template-columns: repeat(2, minmax(50%, auto));
    > div {
      height: 100%;
    }
  `}
`
