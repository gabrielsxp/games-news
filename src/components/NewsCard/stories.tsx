import { Story, Meta } from '@storybook/react/types-6-0'
import NewsCard, { NewsCardProps } from '.'
import mock from './mock'

export default {
  title: 'NewsCard',
  component: NewsCard
} as Meta

console.log(mock)

export const Default: Story<NewsCardProps> = (args) => <NewsCard {...args} />
Default.args = {
  ...mock
}
