import { Story, Meta } from '@storybook/react/types-6-0'
import ArticleCard, { ArticleCardProps } from '.'
import mock from './mock'

export default {
  title: 'ArticleCard',
  component: ArticleCard
} as Meta

export const Default: Story<ArticleCardProps> = (args) => (
  <div style={{ width: '30rem', height: '30rem' }}>
    <ArticleCard {...args} />
  </div>
)

export const HighLight: Story<ArticleCardProps> = (args) => (
  <div style={{ width: '65rem', height: '65rem' }}>
    <ArticleCard {...args} />
  </div>
)

Default.args = {
  ...mock
}
HighLight.args = {
  ...mock,
  highlight: true
}
