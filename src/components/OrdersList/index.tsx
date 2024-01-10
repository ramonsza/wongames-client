import Heading from '@/components/Heading'
import * as S from './styles'
import GameItem, { GameItemProps } from '@/components/GameItem'
import Empty from '@/components/Empty'

export type OrderListProps = {
  items?: GameItemProps[]
}

const OrdersList = ({ items = [] }: OrderListProps) => (
  <S.Wrapper>
    <Heading $lineBottom $lineColor="primary" $color="black" $size="small">
      My orders
    </Heading>
    {items.length ? (
      items?.map((item) => <GameItem key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great fames and offers"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default OrdersList
