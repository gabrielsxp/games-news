import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'

import Search from '.'

describe('<Search />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Search />)
    expect(screen.getByLabelText(/search icon/i)).toBeInTheDocument()
  })
})
