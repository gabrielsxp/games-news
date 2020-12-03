import { Story, Meta } from '@storybook/react/types-6-0'
import SectionHeading, { SectionHeadingProps } from '.'

export default {
  title: 'SectionHeading',
  component: SectionHeading
} as Meta

export const Default: Story<SectionHeadingProps> = (args) => (
  <SectionHeading {...args} />
)

Default.args = {
  title: 'Section Title'
}
