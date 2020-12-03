import { Story, Meta } from '@storybook/react/types-6-0'
import ArticleCard, { ArticleCardProps } from '.'
import mock from './mock'

export default {
  title: 'ArticleCard',
  component: ArticleCard
} as Meta

export const Default: Story<ArticleCardProps> = (args) => (
  <div style={{ position: 'relative', height: '30rem', width: '30rem' }}>
    <ArticleCard {...args} />
  </div>
)
export const Hightlight: Story<ArticleCardProps> = (args) => (
  <div style={{ position: 'relative', height: '65rem', width: '65rem' }}>
    <ArticleCard {...args} />
  </div>
)

Default.args = {
  ...mock
}

Hightlight.args = {
  ...mock,
  highlight: true
}
