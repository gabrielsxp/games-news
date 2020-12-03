import * as S from './styles'
import { Container } from 'components/Container'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { DoubleArrow as ArrowIcon } from '@styled-icons/material-rounded/DoubleArrow'

export type HeaderProps = {
  image?: string
  alt?: string
  title: string
}

const Header = ({
  image = '/img/headerbg.webp',
  alt = 'A image of a war tank in combat',
  title
}: HeaderProps) => {
  const router = useRouter()
  const [routes, setRoutes] = useState<string[]>([])

  useEffect(() => {
    console.warn(router)
    if (router?.pathname) {
      const r = router.pathname.split('/')
      setRoutes(r)
      r.unshift('home')
    }
  }, [router])

  return (
    <S.Wrapper>
      <LazyLoadImage src={image} alt={alt} />
      <Container>
        <S.HeaderContent>
          <S.HeaderTitle>{title}</S.HeaderTitle>
          <S.History>
            {routes &&
              routes.map((route, index) => {
                return (
                  <S.LinkWrapper key={index}>
                    {index !== routes.length - 1 ? (
                      <S.SLink href={route === 'home' ? '/' : route}>
                        {route.charAt(0).toUpperCase() + route.slice(1)}
                      </S.SLink>
                    ) : (
                      <S.SPath>
                        {route.charAt(0).toUpperCase() + route.slice(1)}
                      </S.SPath>
                    )}
                    {index < routes.length - 2 && <ArrowIcon />}
                  </S.LinkWrapper>
                )
              })}
          </S.History>
        </S.HeaderContent>
      </Container>
    </S.Wrapper>
  )
}

export default Header
