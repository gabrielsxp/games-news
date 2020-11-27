import { screen } from '@testing-library/react'
import SocialBanner from '.'
import { renderWithTheme } from 'utils/helpers'
import mock from './mock'

describe('<SocialBanner />', () => {
  it('should render a social banner of Facebook', () => {
    renderWithTheme(<SocialBanner {...mock} title="Facebook" />)
    expect(screen.getByLabelText(/facebook icon/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/facebook/i).closest('a')).toHaveAttribute(
      'href',
      'https://facebook.com'
    )
    expect(screen.getByText(/facebook/i).parentElement).toHaveStyle({
      backgroundColor: '#2d4a86'
    })
  })
})
