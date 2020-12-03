import { screen } from '@testing-library/react'
import mock from './mock'
import SocialLink from '.'
import { renderWithTheme } from 'utils/helpers'

describe('<SocialLink />', () => {
  it('should render the heading', () => {
    renderWithTheme(<SocialLink {...mock} title="Facebook" />)
    expect(screen.getByLabelText(/Facebook icon/i)).toBeInTheDocument()
    expect(
      screen.getByLabelText(/Facebook icon/i).closest('a')
    ).toHaveAttribute('href', 'https://facebook.com')
  })
})
