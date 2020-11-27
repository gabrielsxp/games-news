import Navbar from 'components/Navbar'
import Hero from 'components/Hero'
import HeroGrid from 'components/HeroGrid'
import mock from 'components/NewsCard/mock'
import { NewsCardProps } from 'components/NewsCard'
import HomeTemplate from 'templates/HomeTemplate'
import { Container } from 'components/Container'
import SectionHeading from 'components/SectionHeading'
import * as S from 'templates/HomeTemplate/styles'

const cards: NewsCardProps[] = Array.from(new Array(5)).reduce((acc) => {
  acc = acc.concat(mock)
  return acc
}, [])

export default function Home() {
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
            <SectionHeading title="Follow Us" />
          </S.Section>
        </S.MidSection>
      </Container>
    </HomeTemplate>
  )
}
