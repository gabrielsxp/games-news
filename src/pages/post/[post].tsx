import * as S from 'templates/PostTemplate/styles'
import PostTemplate from 'templates/PostTemplate'
import { Container } from 'components/Container'
import SectionHeading from 'components/SectionHeading'
import SideCard from 'components/SideCard'
import SocialBanner from 'components/SocialBanner'
import { ClockOutline as ClockIcon } from '@styled-icons/evaicons-outline/ClockOutline'
import { UserCircle as AuthorIcon } from '@styled-icons/boxicons-regular/UserCircle'
import NewsCard from 'components/NewsCard'
import { DiscussionEmbed } from 'disqus-react'
import withApollo from 'utils/withApollo'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import moment from 'moment'
import Loading from 'components/Loading'
import Error from 'components/Error'
import { Post as PostProps } from 'generated/graphql'
import {
  useGetPostQuery,
  useGetSocialsQuery,
  useGetPostsQuery
} from 'generated/graphql'

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  InstapaperIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const {
    data: postData,
    error: postError,
    loading: postLoading
  } = useGetPostQuery({
    variables: {
      slug: router.query.post as string
    },
    fetchPolicy: 'no-cache'
  })
  const {
    data: news,
    error: newsError,
    loading: newsLoading
  } = useGetPostsQuery({
    variables: {
      limit: 5,
      where: {
        categories: {
          name: 'GAMES'
        }
      },
      sort: 'created_at:DESC'
    },
    fetchPolicy: 'no-cache'
  })
  const {
    data: related,
    error: relatedError,
    loading: relatedLoading
  } = useGetPostsQuery({
    variables: {
      limit: 3,
      where: {
        categories: {
          name: 'NEWS'
        }
      },
      sort: 'created_at:DESC'
    }
  })
  const {
    data: home,
    error: homeError,
    loading: homeLoading
  } = useGetSocialsQuery()

  const hasAnyErrors = postError || newsError || homeError || relatedError
  const hasAnythingLoading =
    postLoading || newsLoading || homeLoading || relatedLoading
  const post = postData?.posts ? postData.posts[0] : null

  const baseUrl = 'http://localhost:3000/post/'

  return hasAnythingLoading ? (
    <Loading />
  ) : hasAnyErrors ? (
    <Error />
  ) : (
    <PostTemplate>
      <S.PostContent>
        <Container>
          <S.MidSection>
            <S.Section>
              <LazyLoadImage src={post?.image?.url} alt={post?.title} />
              <S.ContentTitle>{post?.title}</S.ContentTitle>
              <S.ContentLede>{post?.lede}</S.ContentLede>
              <S.MetaWrapper>
                <S.AuthorInfoWrapper>
                  <S.TimeContent>
                    <ClockIcon />
                    <span>
                      {moment(post?.created_at).format(
                        'MMMM Do YYYY, h:mm:ss a'
                      )}
                    </span>
                  </S.TimeContent>
                  <S.AuthorWrapper>
                    <AuthorIcon />
                    Post by: <span>Admin</span>
                  </S.AuthorWrapper>
                </S.AuthorInfoWrapper>
                <S.ShareWrapper>
                  <span>Share:</span>
                  <EmailShareButton url={baseUrl + post?.slug}>
                    <EmailIcon size={24} borderRadius={5} />
                  </EmailShareButton>
                  <FacebookShareButton url={baseUrl + post?.slug}>
                    <FacebookIcon size={24} borderRadius={5} />
                  </FacebookShareButton>
                  <TwitterShareButton url={baseUrl + post?.slug}>
                    <TwitterIcon size={24} borderRadius={5} />
                  </TwitterShareButton>
                  <WhatsappShareButton url={baseUrl + post?.slug}>
                    <WhatsappIcon size={24} borderRadius={5} />
                  </WhatsappShareButton>
                  <RedditShareButton url={baseUrl + post?.slug}>
                    <RedditIcon size={24} borderRadius={5} />
                  </RedditShareButton>
                  <InstapaperShareButton url={baseUrl + post?.slug}>
                    <InstapaperIcon size={24} borderRadius={5} />
                  </InstapaperShareButton>
                </S.ShareWrapper>
              </S.MetaWrapper>
              <S.Line />
              <S.BodyWrapper
                dangerouslySetInnerHTML={{ __html: post?.body ?? '' }}
              ></S.BodyWrapper>
              <S.Line />
              <SectionHeading title="You can also like" />
              <S.RelatedContainer>
                {related?.posts?.map((card, index) => {
                  return (
                    card && <NewsCard key={index} {...(card as PostProps)} />
                  )
                })}
              </S.RelatedContainer>
              <DiscussionEmbed
                shortname="games-news-2"
                config={{
                  url: baseUrl + post?.slug,
                  identifier: post?.id,
                  title: post?.title,
                  language: 'en_US' //e.g. for Traditional Chinese (Taiwan)
                }}
              />
            </S.Section>
            <S.Section>
              <SectionHeading title="Most Viewed" />
              <S.SideCardsContainer>
                {news?.posts &&
                  news?.posts?.map((card, index) => {
                    return card && <SideCard {...card} key={index} />
                  })}
              </S.SideCardsContainer>
              <SectionHeading title="Follow us" />
              <S.SocialBannersContainer>
                {home?.home?.Social &&
                  home?.home?.Social?.map((banner, index) => {
                    return banner && <SocialBanner key={index} {...banner} />
                  })}
              </S.SocialBannersContainer>
            </S.Section>
          </S.MidSection>
        </Container>
      </S.PostContent>
    </PostTemplate>
  )
}

export default withApollo({ ssr: true })(Post)
