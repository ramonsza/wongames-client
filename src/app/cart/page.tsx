import Cart, { CartProps } from '@/templates/Cart'
import itemsMock from '@/components/CartList/mock'
import highlightMock from '@/components/Highlight/mock'
import gamesMock from '@/components/GameCardSlider/mock'
import cardsMock from '@/components/PaymentOptions/mock'

export async function getCartProps(): Promise<CartProps> {
  return {
    items: itemsMock,
    total: 'R$ 430,00',
    recommendedHighlight: highlightMock,
    recommendedGames: gamesMock,
    cards: cardsMock
  }
}

export default async function CartPage() {
  const props = await getCartProps()
  return <Cart {...props} />
}
