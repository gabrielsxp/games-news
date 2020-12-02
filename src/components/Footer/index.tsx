import * as S from './styles'
import Logo from 'components/Logo'
import { SocialBannerProps } from 'components/SocialBanner'
import SocialLink from 'components/SocialLink'
import { Container } from 'components/Container'
import { GetSocialsQuery } from 'generated/graphql'

type FooterProps = {
  home?: GetSocialsQuery
}

const Footer = ({ home }: FooterProps) => (
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
            {home?.home?.Social &&
              home.home.Social.map((socialLink, index) => {
                return socialLink && <SocialLink {...socialLink} key={index} />
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
