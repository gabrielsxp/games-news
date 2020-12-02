import * as S from './styles'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import { useGetSocialsQuery } from 'generated/graphql'
import withApollo from 'utils/withApollo'

export type HomeTemplateProps = {
  children?: React.ReactNodeArray | React.ReactNode
}

const HomeTemplate = ({ children }: HomeTemplateProps) => {
  const {
    data: home,
    error: homeError,
    loading: homeLoading
  } = useGetSocialsQuery()

  if (homeLoading) {
    return <div>loading</div>
  }

  if (homeError) {
    return <div>error</div>
  }

  return (
    <S.Wrapper>
      <Navbar />
      {children}
      {home && <Footer home={home} />}
    </S.Wrapper>
  )
}

export default withApollo({ ssr: true })(HomeTemplate)
