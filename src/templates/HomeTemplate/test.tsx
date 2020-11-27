import { screen } from '@testing-library/react'
import HomeTemplate from '.'
import { renderWithTheme } from 'utils/helpers'

describe('<HomeTemplate />', () => {
  it('should render the heading', () => {
    renderWithTheme(<HomeTemplate />)
    //todo
  })
})
