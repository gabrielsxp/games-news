import * as S from './styles'
import NewsCard from 'components/NewsCard'
import MediaMatch from 'components/MediaMatch'

import { NewsCardProps } from 'components/NewsCard'
export type HeroGridProps = {
  cards?: NewsCardProps[]
}

const HeroGrid = ({ cards }: HeroGridProps) => (
  <S.Wrapper>
    {cards && cards[0] && (
      <>
        <MediaMatch lessThan="medium">
          <NewsCard {...cards[0]} />
        </MediaMatch>
        <MediaMatch greaterThan="medium">
          <NewsCard highlight key={cards[0].id} {...cards[0]} />
        </MediaMatch>
      </>
    )}
    <S.SubWrapper>
      {cards &&
        cards.slice(1, 5).map((card, index) => {
          return <NewsCard key={index} {...card} />
        })}
    </S.SubWrapper>
  </S.Wrapper>
)

export default HeroGrid
