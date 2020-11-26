import * as S from './styles'
import Logo from 'components/Logo'
import { Container } from 'components/Container'
import Search from 'components/Search'
import MediaMatch from 'components/MediaMatch'
import { MenuAltRight } from '@styled-icons/boxicons-regular/MenuAltRight'
import { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  return (
    <S.Wrapper>
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
      <MediaMatch greaterThan="medium">
        <S.TopBar>
          <Container>
            <S.TopBarWrapper>
              <Logo />
            </S.TopBarWrapper>
          </Container>
        </S.TopBar>
      </MediaMatch>
      <S.BottomBar>
        <Container>
          <S.NavWrapper>
            <S.ContentWrapper>
              <MediaMatch greaterThan="medium">
                <S.NavLink>Home</S.NavLink>
                <S.NavLink>Latest News</S.NavLink>
                <S.NavLink>Latest Articles</S.NavLink>
              </MediaMatch>
              <MediaMatch lessThan="medium">
                <Logo />
              </MediaMatch>
            </S.ContentWrapper>
            <Search />
            <MediaMatch lessThan="medium">
              <S.IconWrapper
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
