import styled, { css } from 'styled-components'
import { rgba } from 'polished'

type SearchOverlayProps = {
  visible?: boolean
}

type IconWrapperProps = {
  fixed?: boolean
}

const IconWrapperModifier = {
  fixed: () => css`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
  `
}

export const Wrapper = styled.main``

export const IconWrapper = styled.button<IconWrapperProps>`
  width: 2.4rem;
  height: 2.4rem;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  ${({ theme, fixed }) => css`
    > svg {
      width: 100%;
      height: 100%;
      color: ${theme.colors.white};
    }
    ${fixed && IconWrapperModifier['fixed']};
  `}
`

export const SearchOverlay = styled.div<SearchOverlayProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: opacity 0.3s ease;
  ${({ theme, visible }) => css`
    background-color: ${rgba(theme.colors.secondary, 0.8)};
    z-index: ${visible ? theme.layers.alwaysOnTop : -100};
    opacity: ${visible ? 1 : 0};
  `}
  > div {
    height: 100%;
  }
`
