import { Story, Meta } from '@storybook/react/types-6-0'
import ArticleGrid from '.'
import mock from 'components/ArticleCard/mock'

import { ArticleGridProps } from '.'
import { ArticleCardProps } from 'components/ArticleCard'

export default {
  title: 'ArticleGrid',
  component: ArticleGrid
} as Meta

const cards: ArticleCardProps[] = Array.from(new Array(5)).reduce((acc) => {
  acc = acc.concat(mock)
  return acc
}, [])

console.log(cards)

export const Default: Story<ArticleGridProps> = (args) => (
  <ArticleGrid {...args} />
)

Default.args = {
  cards
}
