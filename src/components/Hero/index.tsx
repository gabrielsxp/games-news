import * as S from './styles'
import { Container } from 'components/Container'

export type HeroProps = {
  children?: React.ReactNode
}

const Hero = ({ children }: HeroProps) => (
  <S.Wrapper>
    <Container>{children}</Container>
  </S.Wrapper>
)

export default Hero
