import { ShoppingCart, Heart } from '@phosphor-icons/react'
import Heading from '@/components/Heading'
import Ribbon from '@/components/Ribbon'

import * as S from './styles'
import Button from '@/components/Button'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading $color="black" $lineBottom>
      {title}
    </Heading>

    <Ribbon $color="secondary">{`$${price}`}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button $icon={<ShoppingCart size={22} />} $size="large">
        Add to cart
      </Button>
      <Button $icon={<Heart size={22} />} $size="large" $minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
