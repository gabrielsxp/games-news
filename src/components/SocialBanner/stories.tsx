import { Story, Meta } from '@storybook/react/types-6-0'
import SocialBanner, { SocialBannerProps } from '.'
import mock from './mock'

export default {
  title: 'SocialBanner',
  component: SocialBanner,
  argTypes: {
    color: { control: 'color' }
  }
} as Meta

export const Default: Story<SocialBannerProps> = (args) => (
  <div style={{ width: '40rem' }}>
    <SocialBanner {...args} />
  </div>
)

Default.args = {
  ...mock,
  title: 'Facebook'
}

Default.parameters = {
  layout: 'centered'
}
