import * as S from './styles'
import ArticleCard from 'components/ArticleCard'
import MediaMatch from 'components/MediaMatch'
import { ArticleCardProps } from 'components/ArticleCard'
import SideCard from 'components/SideCard'

export type ArticleGridProps = {
  cards?: ArticleCardProps[]
  reduced?: boolean
}

const ArticleGrid = ({ cards, reduced }: ArticleGridProps) => (
  <S.Wrapper reduced={reduced}>
    {cards && cards[0] && (
      <>
        <MediaMatch lessThan="medium">
          <ArticleCard {...cards[0]} />
        </MediaMatch>
        <MediaMatch greaterThan="medium">
          <ArticleCard highlight key={cards[0].id} {...cards[0]} />
          <SideCard key={cards[1].id} {...cards[1]} />
        </MediaMatch>
      </>
    )}
    <S.SubWrapper reduced={reduced}>
      {cards &&
        cards.slice(2, 6).map((card, index) => {
          return <ArticleCard key={index} {...card} />
        })}
    </S.SubWrapper>
  </S.Wrapper>
)

export default ArticleGrid
