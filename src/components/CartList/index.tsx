import GameItem, { GameItemProps } from '@/components/GameItem'
import Button from '@/components/Button'

import * as S from './styles'
import Link from 'next/link'
import Empty from '@/components/Empty'

export type CartListProps = {
  items?: GameItemProps[]
  total?: string
  hasButton?: boolean
}

const CartList = ({ items = [], total, hasButton }: CartListProps) => (
  <S.Wrapper $isEmpty={!items.length}>
    {items.length ? (
      <>
        {items.map((item) => (
          <GameItem {...item} key={item.title} />
        ))}

        <S.Footer>
          {!hasButton && <span>Total:</span>}
          <S.Total>{total}</S.Total>

          {hasButton && (
            <Link href={'/cart'} passHref legacyBehavior>
              <Button as="a">Buy it now</Button>
            </Link>
          )}
        </S.Footer>
      </>
    ) : (
      <Empty
        title="Your cart is empty"
        description="Go back to the store and explore great games and offers"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default CartList
