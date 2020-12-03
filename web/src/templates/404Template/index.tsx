import * as S from './styles'
import { Button } from '@chakra-ui/react'
import Link from 'next/link'

const A404Template = () => (
  <S.Wrapper>
    <S.Image src="/img/404.webp"></S.Image>
    <S.Title>Oops! That page cannot be found</S.Title>
    <S.Subtitle>
      Sorry, but the page you are looking for does not existing
    </S.Subtitle>
    <Link href="/" passHref>
      <Button mt={8} size="lg" colorScheme="green" as="a">
        Back to Home
      </Button>
    </Link>
  </S.Wrapper>
)

export default A404Template
