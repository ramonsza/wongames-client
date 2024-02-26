import { ShoppingCart } from '@phosphor-icons/react'

import * as S from './styles'

type CartIconProps = {
  quantity?: number
}

const CartIcon = ({ quantity = 0 }: CartIconProps) => (
  <S.Wrapper>
    {quantity > 0 && <S.Badge aria-label="Cart Items">{quantity}</S.Badge>}
    <ShoppingCart aria-label="shopping cart" size={24} />
  </S.Wrapper>
)

export default CartIcon
