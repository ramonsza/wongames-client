import Button from '@/components/Button'
import * as S from './styles'
import Ribbon, { RibbonColor, RibbonSize } from '@/components/Ribbon'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSize
  ribbonColor?: RibbonColor
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonSize = 'normal',
  ribbonColor = 'primary'
}: BannerProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon $size={ribbonSize} $color={ribbonColor}>
        {ribbon}
      </Ribbon>
    )}

    <S.Image $src={img} role="img" aria-label={title}></S.Image>

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} $size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
