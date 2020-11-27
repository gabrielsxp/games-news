import * as S from './styles'
import Logo from 'components/Logo'
import { SocialBannerProps } from 'components/SocialBanner'
import SocialLink from 'components/SocialLink'
import { Container } from 'components/Container'

const socialLinks: SocialBannerProps[] = [
  {
    title: 'Facebook',
    url: 'https://facebook.com',
    color: '#2d4a86'
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com',
    color: '#1d9cd6'
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com',
    color: '#405DE6'
  },
  {
    title: 'Google Plus',
    url: 'https://google.com',
    color: '#c44500'
  }
]

const Footer = () => (
  <S.Wrapper>
    <Container>
      <S.TopFooter>
        <S.FooterSection>
          <S.Heading>Links</S.Heading>
          <S.FooterLink href="/news">Latest News</S.FooterLink>
          <S.FooterLink href="/articles">Latest Articles</S.FooterLink>
        </S.FooterSection>
        <S.FooterSection>
          <S.LogoWrapper>
            <Logo />
          </S.LogoWrapper>
          <p>
            We are an environmentally friendly renewable energy company offering
            eco products, & solutions.
          </p>
        </S.FooterSection>
        <S.FooterSection>
          <S.Heading>Follow us on</S.Heading>
          <S.SocialContainer>
            {socialLinks &&
              socialLinks.map((socialLink, index) => {
                return <SocialLink {...socialLink} key={index} />
              })}
          </S.SocialContainer>
        </S.FooterSection>
      </S.TopFooter>
      <S.BottomFooter>
        <p>
          Copyright@{new Date().getFullYear()} game-news. All Rights Reseved
        </p>
      </S.BottomFooter>
    </Container>
  </S.Wrapper>
)

export default Footer
