import * as S from './styles'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

export type HomeTemplateProps = {
  children?: React.ReactNodeArray | React.ReactNode
}

const HomeTemplate = ({ children }: HomeTemplateProps) => (
  <S.Wrapper>
    <Navbar variant />
    {children}
    <Footer />
  </S.Wrapper>
)

export default HomeTemplate
