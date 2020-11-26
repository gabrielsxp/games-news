import { Story, Meta } from '@storybook/react/types-6-0'
import HeroGrid from '.'
import mock from 'components/NewsCard/mock'

import { HeroGridProps } from '.'
import { NewsCardProps } from 'components/NewsCard'

export default {
  title: 'HeroGrid',
  component: HeroGrid
} as Meta

const cards: NewsCardProps[] = Array.from(new Array(5)).reduce((acc) => {
  acc = acc.concat(mock)
  return acc
}, [])

console.log(cards)

export const Default: Story<HeroGridProps> = (args) => <HeroGrid {...args} />

Default.args = {
  cards
}
