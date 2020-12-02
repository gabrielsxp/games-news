import * as S from './styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ClockOutline as ClockIcon } from '@styled-icons/evaicons-outline/ClockOutline'
import moment from 'moment'
import { Post } from 'generated/graphql'
export type NewsCardProps = Pick<
  Post,
  'slug' | 'title' | 'categories' | 'created_at' | 'image'
> & { highlight?: boolean }

const NewsCard = ({
  slug,
  categories,
  title,
  created_at,
  image,
  highlight = false
}: NewsCardProps) => (
  <S.Wrapper>
    {image && image.url && (
      <LazyLoadImage alt={title} src={image.url}></LazyLoadImage>
    )}
    <S.ContentWrapper>
      {!!title && (
        <S.ContentTitle
          href={`/post/${encodeURIComponent(slug)}`}
          size={highlight ? 'large' : 'normal'}
        >
          {title}
        </S.ContentTitle>
      )}
      {!!created_at && (
        <S.TimeContent>
          <ClockIcon />
          <span>{moment(created_at).format('MMMM Do YYYY, h:mm:ss a')}</span>
        </S.TimeContent>
      )}
      <S.LabelsWrapper>
        {categories &&
          categories.length > 0 &&
          categories.map((cat, index) => {
            return (
              cat &&
              cat!.name &&
              cat!.color && (
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

export default NewsCard
