import { render, screen } from '@testing-library/react'
import mock from 'components/NewsCard/mock'
import HeroGrid from '.'
import { renderWithTheme } from 'utils/helpers'
import { NewsCardProps } from 'components/NewsCard'

const cards: NewsCardProps[] = Array.from(new Array(5)).reduce((acc) => {
  acc = acc.concat(mock)
  return acc
}, [])

describe('<HeroGrid />', () => {
  it('should render 5 cards', () => {
    renderWithTheme(<HeroGrid cards={cards} />)
    expect(
      screen.queryAllByAltText(
        /Black Friday 2020: Crash Bandicoot 4 Spins Down To/i
      )
    ).toHaveLength(6)
    // 1 more because of mobile correction
  })
})
