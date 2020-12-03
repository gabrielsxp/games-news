import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'
import mock from './mock'
import SideCard from '.'

describe('<SideCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<SideCard {...mock} />)

    expect(
      screen.getByText(/Black Friday 2020: Crash Bandicoot 4 Spins/i)
    ).toBeInTheDocument()

    expect(
      screen
        .getByText(/Black Friday 2020: Crash Bandicoot 4 Spins/i)
        .closest('a')
    ).toHaveAttribute(
      'href',
      '/post/black-friday-2020-crash-bandicoot-4-spins-down-to-dollar30'
    )

    expect(
      screen.getByText(/November 25th 2020, 2:44:47 pm/i)
    ).toBeInTheDocument()
  })
})
