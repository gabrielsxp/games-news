import Navbar from 'components/Navbar'
import Hero from 'components/Hero'
import HeroGrid from 'components/HeroGrid'
import mock from 'components/NewsCard/mock'
import { NewsCardProps } from 'components/NewsCard'

const cards: NewsCardProps[] = Array.from(new Array(5)).reduce((acc) => {
  acc = acc.concat(mock)
  return acc
}, [])

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero>
        <HeroGrid cards={cards} />
      </Hero>
    </>
  )
}
