import { screen } from '@testing-library/react'

import SectionHeading from '.'
import { renderWithTheme } from 'utils/helpers'

describe('<SectionHeading />', () => {
  it('should render the heading', () => {
    renderWithTheme(<SectionHeading title="Section Heading" />)
    expect(screen.getByText(/Section Heading/i)).toBeInTheDocument()
    expect(screen.getByText(/Section Heading/i)).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.0rem;
        font-weight: bold;
        color: #FAFAFA;
      }

      <h2
        class="c0"
      >
        Section Heading
      </h2>
    `)
  })
})
