// import { screen } from '@testing-library/react'

import PostTemplate from '.'
import { renderWithTheme } from 'utils/helpers'

describe('<PostTemplate />', () => {
  it('should render the template', () => {
    renderWithTheme(<PostTemplate />)
  })
})
