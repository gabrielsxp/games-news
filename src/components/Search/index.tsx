import * as S from './styles'
import { SearchAlt as SearchIcon } from '@styled-icons/boxicons-regular/SearchAlt'
import React, { useState } from 'react'
import { Container } from 'components/Container'
import { Close as CloseIcon } from '@styled-icons/evaicons-solid/Close'
import { NavbarProps } from 'components/Navbar'
import { Formik, Form } from 'formik'
import InputField from 'components/InputField'
import { Button } from '@chakra-ui/react'
import { useGetPostsLazyQuery } from 'generated/graphql'
import SideCard from 'components/SideCard'
import withApollo from 'utils/withApollo'

const Search = ({ variant }: NavbarProps) => {
  const [search, { called, loading, data: posts }] = useGetPostsLazyQuery({
    fetchPolicy: 'no-cache'
  })
  const [isSearchOpened, setIsSearchOpened] = useState<boolean>(false)
  return (
    <S.Wrapper>
      <S.SearchOverlay
        data-testid="search-container"
        aria-hidden={isSearchOpened}
        visible={isSearchOpened}
      >
        <Container>
          <S.IconWrapper
            fixed
            onClick={() => setIsSearchOpened(!isSearchOpened)}
          >
            <CloseIcon aria-label="search close icon" />
          </S.IconWrapper>
          <Formik
            initialValues={{ title: '' }}
            onSubmit={async (values, { setErrors }) => {
              const { title } = values
              if (title === '') {
                return setErrors({ title: 'You must fill this field' })
              }
              search({
                variables: {
                  where: {
                    title_contains: title
                  },
                  sort: 'created_at:DESC'
                }
              })
            }}
          >
            <Form>
              <S.SearchInputsContainer>
                <InputField
                  color="white"
                  name="title"
                  placeholder="Post title"
                />
                <Button
                  isLoading={loading}
                  size="lg"
                  type="submit"
                  colorScheme="red"
                >
                  Search
                </Button>
              </S.SearchInputsContainer>
            </Form>
          </Formik>
          <S.PostsContainer>
            {posts?.posts &&
              posts.posts.map((card, index) => {
                return card && <SideCard {...card} key={index} />
              })}
            {called && (!posts || posts?.posts?.length === 0) && (
              <S.NoResults>No Posts were found !</S.NoResults>
            )}
          </S.PostsContainer>
        </Container>
      </S.SearchOverlay>
      <S.IconWrapper
        variant={variant}
        onClick={() => setIsSearchOpened(!isSearchOpened)}
      >
        <SearchIcon aria-label="search icon" />
      </S.IconWrapper>
    </S.Wrapper>
  )
}

export default withApollo({ ssr: true })(Search)
