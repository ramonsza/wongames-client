import { Heart, ShoppingCart } from '@phosphor-icons/react'
import * as S from './styles'
import Button from '@/components/Button'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
}

const GameCard = ({ title, developer, img, price }: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Developer>{developer}</S.Developer>
    </S.Info>
    <S.FavButton role="button">
      <Heart size={32} aria-label="Add to Wishlist" />
    </S.FavButton>
    <S.BuyBox>
      <S.Price>{price}</S.Price>
      <Button $icon={<ShoppingCart size={15} />} $size="small" />
    </S.BuyBox>
  </S.Wrapper>
)

export default GameCard
