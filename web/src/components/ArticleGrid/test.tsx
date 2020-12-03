import { screen } from '@testing-library/react'
import mock from 'components/ArticleCard/mock'
import ArticleGrid from '.'
import { renderWithTheme } from 'utils/helpers'
import { ArticleCardProps } from 'components/ArticleCard'

const cards: ArticleCardProps[] = Array.from(new Array(5)).reduce((acc) => {
  acc = acc.concat(mock)
  return acc
}, [])

describe('<ArticleGrid />', () => {
  it('should render 5 cards', () => {
    renderWithTheme(<ArticleGrid cards={cards} />)
    expect(
      screen.queryAllByAltText(
        /Black Friday 2020: Crash Bandicoot 4 Spins Down To/i
      )
    ).toHaveLength(6)
    // 1 more because of mobile correction
  })
})
