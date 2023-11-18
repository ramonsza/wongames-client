import { Heart, ShoppingCart } from '@phosphor-icons/react'
import * as S from './styles'
import Button from '@/components/Button'
import Ribbon, { RibbonColor, RibbonSize } from '@/components/Ribbon'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColor
  ribbonSize?: RibbonSize
}

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon $color={ribbonColor} $size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton onClick={onFav} role="button">
        {favorite ? (
          <Heart size={25} aria-label="Remove from Wishlist" weight="fill" />
        ) : (
          <Heart size={25} aria-label="Add to Wishlist" />
        )}
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price $isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button $icon={<ShoppingCart size={15} />} $size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
