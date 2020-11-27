import Hero from 'components/Hero'
import HeroGrid from 'components/HeroGrid'
import ArticleGrid from 'components/ArticleGrid'
import mock from 'components/NewsCard/mock'
import articleMock from 'components/ArticleCard/mock'
import { NewsCardProps } from 'components/NewsCard'
import { ArticleCardProps } from 'components/ArticleCard'
import HomeTemplate from 'templates/HomeTemplate'
import { Container } from 'components/Container'
import SectionHeading from 'components/SectionHeading'
import * as S from 'templates/HomeTemplate/styles'
import SocialBanner, { SocialBannerProps } from 'components/SocialBanner'
import SideCard from 'components/SideCard'

const cards: NewsCardProps[] = Array.from(new Array(5)).reduce((acc) => {
  acc = acc.concat(mock)
  return acc
}, [])
const articles: ArticleCardProps[] = Array.from(new Array(5)).reduce((acc) => {
  acc = acc.concat(articleMock)
  return acc
}, [])

type HomeProps = {
  socialLinks?: SocialBannerProps[]
}

export default function Home() {
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
  return (
    <HomeTemplate>
      <Hero>
        <HeroGrid cards={cards} />
      </Hero>
      <Container>
        <S.MidSection>
          <S.Section>
            <SectionHeading title="Latest News" />
            <HeroGrid reduced cards={cards} />
          </S.Section>
          <S.Section>
            <SectionHeading title="Most Viewed" />
            <S.SideCardsContainer>
              {cards &&
                cards.map((card, index) => {
                  return <SideCard {...card} key={index} />
                })}
            </S.SideCardsContainer>
          </S.Section>
        </S.MidSection>
      </Container>
      <Container>
        <S.MidSection>
          <S.Section>
            <SectionHeading title="Latest Articles" />
            <ArticleGrid reduced cards={articles} />
          </S.Section>
          <S.Section>
            <SectionHeading title="Follow us" />
            <S.SocialBannersContainer>
              {socialLinks &&
                socialLinks.map((banner, index) => {
                  return <SocialBanner key={index} {...banner} />
                })}
            </S.SocialBannersContainer>
          </S.Section>
        </S.MidSection>
      </Container>
    </HomeTemplate>
  )
}
