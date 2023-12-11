'use client'
import Base from '@/templates/Base'

//import * as S from './styles'
import { Container } from '@/components/Container'
import Heading from '@/components/Heading'
import Showcase from '@/components/Showcase'
import { GameCardProps } from '@/components/GameCard'
import { HighlightProps } from '@/components/Highlight'

export type WishlistProps = {
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Wishlist = ({
  recommendedHighlight,
  recommendedGames
}: WishlistProps) => (
  <Base>
    <Container>
      <Heading $lineLeft $lineColor="secondary">
        Wishlist
      </Heading>
    </Container>
    <Showcase
      title="You may like these games"
      highlight={recommendedHighlight}
      games={recommendedGames}
    />
  </Base>
)

export default Wishlist
