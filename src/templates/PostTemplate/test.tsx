import { render, screen } from '@testing-library/react'

import PostTemplate from '.'

describe('<PostTemplate />', () => {
  it('should render the heading', () => {
    const { container } = render(<PostTemplate />)

    expect(screen.getByRole('heading', { name: /PostTemplate/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
