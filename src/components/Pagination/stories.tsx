import { Story, Meta } from '@storybook/react/types-6-0'
import Pagination, { PaginationProps } from '.'

export default {
  title: 'Pagination',
  component: Pagination
} as Meta

export const Default: Story<PaginationProps> = (args) => (
  <Pagination {...args} />
)

Default.args = {
  totalPages: 10,
  currentPage: 1
}
