import * as S from './styles'
import NewsCard from 'components/NewsCard'
import MediaMatch from 'components/MediaMatch'
import { NewsCardProps } from 'components/NewsCard'
export type HeroGridProps = {
  cards?: NewsCardProps[]
  reduced?: boolean
}

const HeroGrid = ({ cards, reduced }: HeroGridProps) => {
  return (
    <S.Wrapper reduced={reduced}>
      {cards && cards[0] && (
        <>
          <MediaMatch lessThan="medium">
            <NewsCard {...cards[0]} />
          </MediaMatch>
          <MediaMatch greaterThan="medium">
            <NewsCard highlight {...cards[0]} />
          </MediaMatch>
        </>
      )}
      <S.SubWrapper reduced={reduced}>
        {cards &&
          cards.slice(1, 5).map((card, index) => {
            return <NewsCard key={index} {...card} />
          })}
      </S.SubWrapper>
    </S.Wrapper>
  )
}

export default HeroGrid
