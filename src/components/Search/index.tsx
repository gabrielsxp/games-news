import * as S from './styles'
import { SearchAlt as SearchIcon } from '@styled-icons/boxicons-regular/SearchAlt'

const Search = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <SearchIcon aria-label="search icon" />
    </S.IconWrapper>
  </S.Wrapper>
)

export default Search
