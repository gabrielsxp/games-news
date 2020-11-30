import * as S from './styles'
import { SearchAlt as SearchIcon } from '@styled-icons/boxicons-regular/SearchAlt'
import { useState } from 'react'
import { Container } from 'components/Container'
import { Close as CloseIcon } from '@styled-icons/evaicons-solid/Close'
import { NavbarProps } from 'components/Navbar'

const Search = ({ variant }: NavbarProps) => {
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

export default Search
