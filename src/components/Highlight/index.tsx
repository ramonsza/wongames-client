import Button from '@/components/Button'
import * as S from './styles'

type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  buttonLabel,
  buttonLink
}: HighlightProps) => (
  <S.Wrapper $backgroundImage={backgroundImage}>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
