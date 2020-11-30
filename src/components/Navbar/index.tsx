import * as S from './styles'
import Logo from 'components/Logo'
import { Container } from 'components/Container'
import Search from 'components/Search'
import MediaMatch from 'components/MediaMatch'
import { MenuAltRight } from '@styled-icons/boxicons-regular/MenuAltRight'
import { useState, useEffect } from 'react'
import useScrollPosition from '@react-hook/window-scroll'
import { useWindowSize } from 'utils/helpers'

export type NavbarProps = {
  variant?: boolean
}
type NavbarPositionProps = 'fixed' | 'absolute'

const Navbar = ({ variant = false }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [navbarPosition, setNavbarPosition] = useState(
    'absolute' as NavbarPositionProps
  )
  const [navbarShadow, setNavbarShadow] = useState('none')
  const [navbarTop, setNavbarTop] = useState<number>(0)
  const scrollY = useScrollPosition(30)
  const { width } = useWindowSize()

  useEffect(() => {
    if (typeof width === 'number') {
      if (scrollY > 70 && width > 599) {
        const position = 'fixed' as NavbarPositionProps
        setNavbarPosition(position)
        setNavbarTop(0)
        setNavbarShadow('none')
      } else if (scrollY > 70 && width <= 599) {
        const position = 'fixed' as NavbarPositionProps
        setNavbarPosition(position)
        setNavbarTop(0)
        setNavbarShadow('none')
      } else if (scrollY <= 70 && width > 599) {
        const position = 'absolute' as NavbarPositionProps
        setNavbarPosition(position)
        setNavbarTop(variant ? 0 : 70)
        setNavbarShadow('none')
      } else {
        const position = 'fixed' as NavbarPositionProps
        setNavbarPosition(position)
        setNavbarTop(0)
        setNavbarShadow(
          '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
        )
      }
    } else {
      const position = 'absolute' as NavbarPositionProps
      setNavbarPosition(position)
    }
  }, [scrollY, width, variant])

  return (
    <S.Wrapper variant={variant}>
      <MediaMatch lessThan="medium">
        <S.MobileMenu
          data-testid="menu-mobile-wrapper"
          aria-hidden={isMobileMenuOpen}
          className={isMobileMenuOpen ? 'display-mobile-menu' : ''}
        >
          <S.MobileMenuWrapper>
            <S.NavLink aria-hidden={isMobileMenuOpen} dark>
              Home
            </S.NavLink>
            <S.NavLink aria-hidden={isMobileMenuOpen} dark>
              Latest News
            </S.NavLink>
            <S.NavLink aria-hidden={isMobileMenuOpen} dark>
              Latest Articles
            </S.NavLink>
          </S.MobileMenuWrapper>
        </S.MobileMenu>
      </MediaMatch>
      {!variant && (
        <MediaMatch greaterThan="medium">
          <S.TopBar variant={variant}>
            <Container>
              <S.TopBarWrapper>
                <Logo />
              </S.TopBarWrapper>
            </Container>
          </S.TopBar>
        </MediaMatch>
      )}
      <S.BottomBar
        style={{
          position: navbarPosition,
          top: navbarTop,
          boxShadow: navbarShadow
        }}
        variant={variant}
      >
        <Container>
          <S.NavWrapper>
            <S.ContentWrapper>
              <MediaMatch greaterThan="medium">
                {variant && <Logo />}
              </MediaMatch>
              <MediaMatch greaterThan="medium">
                <S.NavLink variant={variant}>Home</S.NavLink>
                <S.NavLink variant={variant}>Latest News</S.NavLink>
                <S.NavLink variant={variant}>Latest Articles</S.NavLink>
              </MediaMatch>
              <MediaMatch lessThan="medium">
                <Logo />
              </MediaMatch>
            </S.ContentWrapper>
            <Search variant={variant} />
            <MediaMatch lessThan="medium">
              <S.IconWrapper
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                variant={variant}
              >
                <MenuAltRight aria-label="menu icon" />
              </S.IconWrapper>
            </MediaMatch>
          </S.NavWrapper>
        </Container>
      </S.BottomBar>
    </S.Wrapper>
  )
}

export default Navbar
