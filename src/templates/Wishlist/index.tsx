'use client'
import Base from '@/templates/Base'

//import * as S from './styles'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import Heading from '@/components/Heading'
import Showcase from '@/components/Showcase'
import GameCard, { GameCardProps } from '@/components/GameCard'
import { HighlightProps } from '@/components/Highlight'
import { Divider } from '@/components/Divider'
import Empty from '@/components/Empty'

export type WishlistProps = {
  games?: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Wishlist = ({
  games = [],
  recommendedHighlight,
  recommendedGames
}: WishlistProps) => (
  <Base>
    <Container>
      <Heading $lineLeft $lineColor="secondary">
        Wishlist
      </Heading>

      {games.length >= 1 ? (
        <Grid>
          {games?.map((game, index) => {
            return <GameCard {...game} key={`wishlist-${index}`} />
          })}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}

      <Divider />
    </Container>
    <Showcase
      title="You may like these games"
      highlight={recommendedHighlight}
      games={recommendedGames}
    />
  </Base>
)

export default Wishlist
