import * as S from './styles'
import { FacebookF as FacebookIcon } from '@styled-icons/fa-brands/FacebookF'
import { Twitter as TwitterIcon } from '@styled-icons/fa-brands/Twitter'
import { Instagram as InstagramIcon } from '@styled-icons/fa-brands/Instagram'
import { GooglePlusG as GooglePlusIcon } from '@styled-icons/fa-brands/GooglePlusG'

export type SocialBannerProps = {
  title: 'Facebook' | 'Twitter' | 'Instagram' | 'Google Plus'
  url: string
  color: string
}

function returnSocialIcon(title: string) {
  const socials = {
    Facebook: <FacebookIcon aria-label="Facebook icon" />,
    Twitter: <TwitterIcon aria-label="Twitter icon" />,
    Instagram: <InstagramIcon aria-label="Instagram icon" />,
    'Google Plus': <GooglePlusIcon aria-label="Google Plus icon" />
  }
  const index = (title as unknown) as keyof typeof socials
  return socials[index]
}

const SocialBanner = ({
  title = 'Facebook',
  url,
  color
}: SocialBannerProps) => {
  return (
    <S.Wrapper href={url} target="_blank" rel="noopener noreferrer">
      <S.IconWrapper color={color}>{returnSocialIcon(title)}</S.IconWrapper>
      <S.ContentWrapper color={color}>
        <p>{title}</p>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default SocialBanner
