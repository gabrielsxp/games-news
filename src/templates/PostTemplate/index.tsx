import * as S from './styles'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import { useGetSocialsQuery } from 'generated/graphql'
import withApollo from 'utils/withApollo'
import Loading from 'components/Loading'
import Error from 'components/Error'

export type PostTemplateProps = {
  children?: React.ReactNodeArray | React.ReactNode
}

const PostTemplate = ({ children }: PostTemplateProps) => {
  const {
    data: home,
    error: homeError,
    loading: homeLoading
  } = useGetSocialsQuery()

  if (homeError) {
    return <Error />
  }

  if (homeLoading) {
    return <Loading />
  }

  return (
    <S.Wrapper>
      <Navbar variant />
      {children}
      <Footer home={home} />
    </S.Wrapper>
  )
}

export default withApollo({ ssr: true })(PostTemplate)
