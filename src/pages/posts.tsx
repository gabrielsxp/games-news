/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from 'templates/PostTemplate/styles'
import PostTemplate from 'templates/PostTemplate'
import { Container } from 'components/Container'
import SectionHeading from 'components/SectionHeading'
import SideCard from 'components/SideCard'
import SocialBanner from 'components/SocialBanner'
import ArchiveCard from 'components/ArchiveCard'
import Header from 'components/Header'
import { Button } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import {
  useGetPostsQuery,
  useGetSocialsQuery,
  useBrowsePostsQuery
} from 'generated/graphql'
import withAPollo from 'utils/withApollo'

const Post = () => {
  const {
    data: posts,
    error: postsError,
    loading: postsLoading,
    fetchMore
  } = useBrowsePostsQuery({
    variables: {
      limit: 6,
      sort: 'created_at:DESC'
    },
    notifyOnNetworkStatusChange: true
  })
  const { data: home, error: homeError } = useGetSocialsQuery({
    fetchPolicy: 'cache-first'
  })
  const { data: deals, error: dealsError } = useGetPostsQuery({
    variables: {
      limit: 6,
      where: {
        categories: {
          name: 'DEALS'
        }
      },
      sort: 'created_at:DESC'
    },
    fetchPolicy: 'no-cache'
  })
  if (postsError || homeError || dealsError) {
    return <div>Error fetching posts</div>
  }
  if (postsLoading && !posts?.posts) {
    return <div>Loading</div>
  }
  return (
    <div>
      <Header title="Browse all Posts" />
      <PostTemplate>
        <S.PostsContent>
          <Container>
            <S.MidSection>
              <S.Section>
                <S.PostsContainer>
                  {posts?.posts &&
                    posts?.posts.map((card, index) => {
                      return card && <ArchiveCard {...card} key={index} />
                    })}
                </S.PostsContainer>
                <Box mt={4} width="100%">
                  <Flex justify="center">
                    <Button
                      mt={4}
                      isLoading={postsLoading}
                      colorScheme="red"
                      onClick={() =>
                        fetchMore({
                          variables: {
                            limit: 6,
                            start: posts?.posts?.length
                              ? (Math.ceil(posts.posts.length / 6) + 1) * 6
                              : 0
                          }
                        })
                      }
                    >
                      Load More Posts
                    </Button>
                  </Flex>
                </Box>
              </S.Section>
              <S.Section>
                <SectionHeading title="Most Viewed" />
                <S.SideCardsContainer>
                  {deals?.posts &&
                    deals.posts.map((card, index) => {
                      return card && <SideCard {...card} key={index} />
                    })}
                </S.SideCardsContainer>
                <SectionHeading title="Follow us" />
                <S.SocialBannersContainer>
                  {home?.home?.Social &&
                    home.home.Social.map((banner, index) => {
                      return banner && <SocialBanner key={index} {...banner} />
                    })}
                </S.SocialBannersContainer>
              </S.Section>
            </S.MidSection>
          </Container>
        </S.PostsContent>
      </PostTemplate>
    </div>
  )
}

export default withAPollo({ ssr: true })(Post)
