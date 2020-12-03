import * as S from './styles'
import Logo from 'components/Logo'
import { SocialBannerProps } from 'components/SocialBanner'
import SocialLink from 'components/SocialLink'
import { Container } from 'components/Container'
import { GetSocialsQuery } from 'generated/graphql'
import Link from 'next/link'

type FooterProps = {
  home?: GetSocialsQuery
}

const Footer = ({ home }: FooterProps) => (
  <S.Wrapper>
    <Container>
      <S.TopFooter>
        <S.FooterSection>
          <S.Heading>Links</S.Heading>
          <Link href="/posts" passHref>
            <S.FooterLink href="/news">Browse Posts</S.FooterLink>
          </Link>
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
