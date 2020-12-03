import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Wrapper = styled.header`
  position: relative;
  width: 100%;
  padding-top: 7rem;
  height: 30rem;
  > div {
    height: 100%;
  }
  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:after {
    ${({ theme }) => css`
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${rgba(theme.colors.secondary, 0.5)};
    `}
  }
`
export const HeaderContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  z-index: 10;
`

export const HeaderTitle = styled.h1`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.white};
    font-weight: bold;
  `}
`

export const SLink = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    margin: 0 ${theme.spacings.xxsmall};
    &:nth-of-type(1) {
      margin-left: 0;
    }
  `}
`

export const SPath = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    margin: 0 ${theme.spacings.xxsmall};
    &:nth-of-type(1) {
      margin-left: 0;
    }
  `}
`
export const History = styled.div`
  display: flex;
  align-items: center;
`
export const LinkWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    > svg {
      width: 1.8rem;
      height: 1.8rem;
      color: ${theme.colors.white};
    }
  `}
`
