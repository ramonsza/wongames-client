import Wishlist, { WishlistProps } from '@/templates/Wishlist'

import highlightMock from '@/components/Highlight/mock'
import gamesMock from '@/components/GameCardSlider/mock'

export async function getWishlistProps(): Promise<WishlistProps> {
  return {
    games: gamesMock,
    recommendedHighlight: highlightMock,
    recommendedGames: gamesMock
  }
}

export default async function WishlistPage() {
  const props = await getWishlistProps()
  return <Wishlist {...props} />
}
