import * as S from './styles'
import mock from './mock'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ClockOutline as ClockIcon } from '@styled-icons/evaicons-outline/ClockOutline'
import moment from 'moment'

export type ArchiveCardProps = typeof mock & { highlight?: boolean }

const ArchiveCard = ({
  slug,
  categories,
  title,
  lede,
  created_at,
  image,
  highlight = false
}: ArchiveCardProps) => (
  <S.Wrapper>
    {image && !!image.url && (
      <LazyLoadImage alt={title} src={image.url}></LazyLoadImage>
    )}
    <S.ContentWrapper>
      <S.LabelsWrapper>
        {categories &&
          categories.length > 0 &&
          categories.map((cat, index) => {
            return (
              !!cat.name && (
                <S.Label aria-label="tag" key={index} color={cat.color}>
                  {cat.name}
                </S.Label>
              )
            )
          })}
      </S.LabelsWrapper>
      {!!created_at && (
        <S.TimeContent>
          <ClockIcon />
          <span>{moment(created_at).format('MMMM Do YYYY, h:mm:ss a')}</span>
        </S.TimeContent>
      )}
      {!!title && (
        <S.ContentTitle
          href={`/post/${encodeURIComponent(slug)}`}
          size={highlight ? 'large' : 'normal'}
        >
          {title}
        </S.ContentTitle>
      )}
      {!!lede && <S.LedeContent>{lede}</S.LedeContent>}
    </S.ContentWrapper>
  </S.Wrapper>
)

export default ArchiveCard
