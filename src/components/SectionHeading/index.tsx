import * as S from './styles'

export type SectionHeadingProps = {
  title?: string
}

const SectionHeading = ({ title = '' }: SectionHeadingProps) => (
  <S.Wrapper>
    <S.SectionTitle>{title}</S.SectionTitle>
  </S.Wrapper>
)

export default SectionHeading
