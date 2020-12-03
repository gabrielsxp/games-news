/* eslint-disable @typescript-eslint/no-explicit-any */
import Hero from 'components/Hero'
import HeroGrid from 'components/HeroGrid'
import ArticleGrid from 'components/ArticleGrid'
import HomeTemplate from 'templates/HomeTemplate'
import { Container } from 'components/Container'
import SectionHeading from 'components/SectionHeading'
import * as S from 'templates/HomeTemplate/styles'
import SocialBanner from 'components/SocialBanner'
import SideCard from 'components/SideCard'
import withApollo from 'utils/withApollo'
import Error from 'components/Error'
import Loading from 'components/Loading'
import { Post, useGetPostsQuery, useGetSocialsQuery } from 'generated/graphql'

const Home = () => {
  const {
    data: home,
    error: homeError,
    loading: homeLoading
  } = useGetSocialsQuery()

  const {
    data: topCards,
    error: topCardsError,
    loading: topCardsLoading
  } = useGetPostsQuery({
    variables: {
      limit: 5,
      where: {
        categories: {
          name: 'STANDARD NEWS'
        }
      },
      sort: 'created_at:DESC'
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
      start: 5,
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
    data: articles,
    error: articlesError,
    loading: articlesLoading
  } = useGetPostsQuery({
    variables: {
      limit: 6,
      where: {
        categories: {
          name: 'DEALS'
        }
      },
      sort: 'created_at:DESC'
    }
  })
  const {
    data: dataSide,
    error: sideError,
    loading: sideLoading
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

  const hasAnyErrors =
    topCardsError || newsError || articlesError || sideError || homeError
  const hasAnythingLoading =
    topCardsLoading ||
    newsLoading ||
    articlesLoading ||
    sideLoading ||
    homeLoading

  return hasAnythingLoading ? (
    <Loading />
  ) : hasAnyErrors ? (
    <Error />
  ) : (
    <HomeTemplate>
      <Hero>
        {topCards && topCards.posts && (
          <HeroGrid cards={topCards.posts as Post[]} />
        )}
      </Hero>
      <Container>
        <S.MidSection>
          <S.Section>
            <SectionHeading title="Game News" />
            {news && news.posts && (
              <HeroGrid reduced cards={news.posts as Post[]} />
            )}
          </S.Section>
          <S.Section>
            <SectionHeading title="Most Viewed" />
            <S.SideCardsContainer>
              {dataSide &&
                dataSide.posts &&
                dataSide.posts.map((card, index) => {
                  return card && <SideCard key={index} {...card} />
                })}
            </S.SideCardsContainer>
          </S.Section>
        </S.MidSection>
      </Container>
      <Container>
        <S.MidSection>
          <S.Section>
            <SectionHeading title="Best Deals" />
            {articles?.posts && (
              <ArticleGrid reduced cards={articles.posts as Post[]} />
            )}
          </S.Section>
          <S.Section>
            <SectionHeading title="Follow us" />
            <S.SocialBannersContainer>
              {home?.home?.Social?.map((banner, index) => {
                return banner && <SocialBanner key={index} {...banner} />
              })}
            </S.SocialBannersContainer>
          </S.Section>
        </S.MidSection>
      </Container>
    </HomeTemplate>
  )
}

export default withApollo({
  ssr: true
})(Home)
