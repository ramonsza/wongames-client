import { GameItemProps } from '@/components/GameItem'
import * as S from './styles'
import Dropdown from '@/components/Dropdown'
import CartList from '@/components/CartList'
import CartIcon from '@/components/CartIcon'

export type CartDropDownProps = {
  items?: GameItemProps[]
  total?: string
}

const CartDropdown = ({ items, total }: CartDropDownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={items?.length} />}>
      <CartList items={items} total={total} hasButton />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
