import { Story, Meta } from '@storybook/react/types-6-0'
import NewsCard, { NewsCardProps } from '.'
import mock from './mock'

export default {
  title: 'NewsCard',
  component: NewsCard
} as Meta

export const Default: Story<NewsCardProps> = (args) => (
  <div style={{ width: '30rem', height: '30rem' }}>
    <NewsCard {...args} />
  </div>
)

export const HighLight: Story<NewsCardProps> = (args) => (
  <div style={{ width: '65rem', height: '65rem' }}>
    <NewsCard {...args} />
  </div>
)

Default.args = {
  ...mock
}
HighLight.args = {
  ...mock,
  highlight: true
}
