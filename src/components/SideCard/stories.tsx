import { Story, Meta } from '@storybook/react/types-6-0'
import SideCard, { SideCardProps } from '.'
import mock from './mock'

export default {
  title: 'SideCard',
  component: SideCard
} as Meta

export const Default: Story<SideCardProps> = (args) => (
  <div style={{ width: '40rem' }}>
    <SideCard {...args} />
  </div>
)

Default.args = {
  ...mock
}
Default.parameters = {
  layout: 'centered',
  backgrounds: {
    default: 'dark'
  }
}
