import * as S from './styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ClockOutline as ClockIcon } from '@styled-icons/evaicons-outline/ClockOutline'
import moment from 'moment'
import { PostBodyFragment } from 'generated/graphql'

export type SideCardProps = PostBodyFragment

const SideCard = ({ slug, title, created_at, image }: SideCardProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <LazyLoadImage src={image?.url} alt={title} />
    </S.ImageWrapper>
    <S.ContentWrapper>
      <S.TimeContent>
        <ClockIcon />
        <span>{moment(created_at).format('MMMM Do YYYY, h:mm:ss a')}</span>
      </S.TimeContent>
      <S.ContentTitle href={`/post/${slug}`}>{title}</S.ContentTitle>
    </S.ContentWrapper>
  </S.Wrapper>
)

export default SideCard
