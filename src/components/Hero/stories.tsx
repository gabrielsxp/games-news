import { Story, Meta } from '@storybook/react/types-6-0'
import Hero from '.'
import HeroGrid from 'components/HeroGrid'
import mock from 'components/NewsCard/mock'
import { NewsCardProps } from 'components/NewsCard'

export default {
  title: 'Hero',
  component: Hero
} as Meta

const cards: NewsCardProps[] = Array.from(new Array(5)).reduce((acc) => {
  acc = acc.concat(mock)
  return acc
}, [])

export const Default: Story = () => (
  <Hero>
    <HeroGrid cards={cards} />
  </Hero>
)

Default.parameters = {
  layout: 'fullscreen'
}
