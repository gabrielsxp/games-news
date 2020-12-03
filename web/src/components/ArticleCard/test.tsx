import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'
import ArticleCard from '.'
import mock from './mock'

describe('<ArticleCard />', () => {
  it('should render a normal card', () => {
    renderWithTheme(<ArticleCard {...mock} />)

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
  it('should render a highlighted card', () => {
    renderWithTheme(<ArticleCard highlight {...mock} />)

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

    expect(
      screen.getByText(
        /Crash Bandicoot 4 is the first new game in the platformer franchise in years, and it'll be/i
      )
    ).toBeInTheDocument

    expect(screen.queryAllByLabelText(/tag/i)).toHaveLength(3)
  })
})
