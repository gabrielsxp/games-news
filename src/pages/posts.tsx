import * as S from 'templates/PostTemplate/styles'
import PostTemplate from 'templates/PostTemplate'
import { Container } from 'components/Container'
import SectionHeading from 'components/SectionHeading'
import SideCard from 'components/SideCard'
import SocialBanner, { SocialBannerProps } from 'components/SocialBanner'
import mock from 'components/ArchiveCard/mock'
import ArchiveCard from 'components/ArchiveCard'
import Header from 'components/Header'
import { Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { ArchiveCardProps } from 'components/ArchiveCard'
import Pagination from 'components/Pagination'

const cards: ArchiveCardProps[] = Array.from(new Array(6)).reduce((acc) => {
  acc = acc.concat(mock)
  return acc
}, [])

const socialLinks: SocialBannerProps[] = [
  {
    title: 'Facebook',
    url: 'https://facebook.com',
    color: '#2d4a86'
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com',
    color: '#1d9cd6'
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com',
    color: '#405DE6'
  },
  {
    title: 'Google Plus',
    url: 'https://google.com',
    color: '#c44500'
  }
]

const Post = () => (
  <>
    <Header title="Browse all Posts" />
    <PostTemplate>
      <S.PostsContent>
        <Container>
          <S.MidSection>
            <S.Section>
              <S.SearchInputsContainer>
                <Input size="lg" placeholder="Text search" />
                <Select size="lg" placeholder="Type of post">
                  <option value="option1">All</option>
                  <option value="option2">Article</option>
                  <option value="option3">News</option>
                </Select>
                <Button size="lg" colorScheme="blue">
                  Search
                </Button>
              </S.SearchInputsContainer>
              <S.PostsContainer>
                {cards &&
                  cards.map((card, index) => {
                    return <ArchiveCard {...card} key={index} />
                  })}
              </S.PostsContainer>
              <Pagination></Pagination>
            </S.Section>
            <S.Section>
              <SectionHeading title="Most Viewed" />
              <S.SideCardsContainer>
                {cards &&
                  cards.map((card, index) => {
                    return <SideCard {...card} key={index} />
                  })}
              </S.SideCardsContainer>
              <SectionHeading title="Follow us" />
              <S.SocialBannersContainer>
                {socialLinks &&
                  socialLinks.map((banner, index) => {
                    return <SocialBanner key={index} {...banner} />
                  })}
              </S.SocialBannersContainer>
            </S.Section>
          </S.MidSection>
        </Container>
      </S.PostsContent>
    </PostTemplate>
  </>
)

export default Post
