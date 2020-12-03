import { screen } from '@testing-library/react'
import Header from '.'
import { renderWithTheme } from 'utils/helpers'

describe('<Header />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Header title="test" />)

    expect(screen.getByRole('heading', { name: /test/i })).toBeInTheDocument()
    expect(
      screen.getByAltText(/A image of a war tank in combat/i)
    ).toBeInTheDocument()
  })
})
