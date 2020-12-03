import { Story, Meta } from '@storybook/react/types-6-0'
import SocialLink, { SocialLinkProps } from '.'
import mock from './mock'

export default {
  title: 'SocialLink',
  component: SocialLink,
  argTypes: {
    color: { control: 'color' }
  }
} as Meta

export const Default: Story<SocialLinkProps> = (args) => (
  <SocialLink {...args} />
)

Default.args = {
  ...mock,
  title: 'Facebook'
}

Default.parameters = {
  layout: 'centered'
}
