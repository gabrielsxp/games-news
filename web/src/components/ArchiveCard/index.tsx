import * as S from './styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ClockOutline as ClockIcon } from '@styled-icons/evaicons-outline/ClockOutline'
import moment from 'moment'
import { PostBodyFragment } from 'generated/graphql'
import Link from 'next/link'

export type ArchiveCardProps = PostBodyFragment & { highlight?: boolean }

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
      <LazyLoadImage
        alt={title}
        src={image.url ?? '/img/placeholder.jpg'}
      ></LazyLoadImage>
    )}
    <S.ContentWrapper>
      <S.LabelsWrapper>
        {categories &&
          categories.length > 0 &&
          categories.map((cat, index) => {
            return (
              !!cat?.name &&
              !!cat?.color && (
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
        <Link href={`/post/${encodeURIComponent(slug)}`} passHref>
          <S.ContentTitle size={highlight ? 'large' : 'normal'}>
            {title}
          </S.ContentTitle>
        </Link>
      )}
      {!!lede && <S.LedeContent>{lede}</S.LedeContent>}
    </S.ContentWrapper>
  </S.Wrapper>
)

export default ArchiveCard
