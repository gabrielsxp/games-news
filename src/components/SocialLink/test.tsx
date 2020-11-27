import { render, screen } from '@testing-library/react'

import SocialLink from '.'

describe('<SocialLink />', () => {
  it('should render the heading', () => {
    const { container } = render(<SocialLink />)

    expect(screen.getByRole('heading', { name: /SocialLink/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
