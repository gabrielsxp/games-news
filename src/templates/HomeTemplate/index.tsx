import * as S from './styles'
import Navbar from 'components/Navbar'
import { Container } from 'components/Container'

export type HomeTemplateProps = {
  children?: React.ReactNodeArray | React.ReactNode
}

const HomeTemplate = ({ children }: HomeTemplateProps) => (
  <S.Wrapper>
    <Navbar />
    {children}
    {/* Footer */}
  </S.Wrapper>
)

export default HomeTemplate
