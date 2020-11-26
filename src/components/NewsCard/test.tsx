import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'
import NewsCard from '.'
import mock from './mock'

describe('<NewsCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<NewsCard {...mock} />)

    expect(
      screen
        .getByText(/Black Friday 2020: Crash Bandicoot 4 Spins Down To \$30/i)
        .closest('a')
    ).toHaveAttribute(
      'href',
      '/post/black-friday-2020-crash-bandicoot-4-spins-down-to-dollar30'
    )
    expect(
      screen.getByAltText(/Black Friday 2020: Crash Bandicoot 4 Spins Down To/i)
    ).toBeInTheDocument()

    expect(
      screen.getByText(/November 25th 2020, 2:44:47 pm/i)
    ).toBeInTheDocument()

    expect(screen.queryAllByLabelText(/tag/i)).toHaveLength(3)
  })
})
