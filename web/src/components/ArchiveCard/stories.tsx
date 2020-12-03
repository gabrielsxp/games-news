import { Story, Meta } from '@storybook/react/types-6-0'
import ArchiveCard, { ArchiveCardProps } from '.'
import mock from './mock'

export default {
  title: 'ArchiveCard',
  component: ArchiveCard
} as Meta

export const Default: Story<ArchiveCardProps> = (args) => (
  <div style={{ width: '30rem', height: '30rem' }}>
    <ArchiveCard {...args} />
  </div>
)

export const HighLight: Story<ArchiveCardProps> = (args) => (
  <div style={{ width: '65rem', height: '65rem' }}>
    <ArchiveCard {...args} />
  </div>
)

Default.args = {
  ...mock
}
HighLight.args = {
  ...mock,
  highlight: true
}
