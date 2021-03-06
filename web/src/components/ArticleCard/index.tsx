import * as S from './styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ClockOutline as ClockIcon } from '@styled-icons/evaicons-outline/ClockOutline'
import moment from 'moment'
import { PostBodyFragment } from 'generated/graphql'
import Link from 'next/link'

export type ArticleCardProps = PostBodyFragment & { highlight?: boolean }

const ArticleCard = ({
  slug,
  categories,
  title,
  created_at,
  image,
  lede,
  highlight = false
}: ArticleCardProps) => (
  <S.Wrapper highlight={highlight}>
    {image && !!image.url && (
      <LazyLoadImage
        alt={title}
        src={image.url ?? '/img/placeholder.jpg'}
      ></LazyLoadImage>
    )}
    <S.ContentWrapper>
      {!!created_at && (
        <S.TimeContent highlight={highlight}>
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
      {highlight && !!lede && <S.LedeContent>{lede}</S.LedeContent>}
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
    </S.ContentWrapper>
  </S.Wrapper>
)

export default ArticleCard
