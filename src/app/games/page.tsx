import { GamesTemplateProps } from '@/templates/Games'
import GamesTemplate from '@/templates/Games'
import filterItemsMock from '@/components/ExploreSidebar/mock'
import { getClient } from '@/lib/client'
import { QUERY_GAMES } from '@/graphql/queries/games'
import {
  QueryGamesQuery,
  QueryGamesQueryVariables
} from '@/graphql/generated/graphql'

export async function generateStaticParams() {
  return [{ slug: 'cyberpunk-2077' }]
}

async function getGameProps(): Promise<GamesTemplateProps> {
  const { data } = await getClient().query<
    QueryGamesQuery,
    QueryGamesQueryVariables
  >({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    },
    context: {
      fetchOptions: {
        next: { revalidate: 60 }
      }
    }
  })

  return {
    games: data.games!.data.map((game) => {
      return {
        title: game.attributes!.name,
        slug: game.attributes!.slug!,
        developer: game.attributes!.developers!.data[0]!.attributes!.name,
        img: `http://localhost:1337${
          game.attributes!.cover!.data!.attributes!.url
        }`,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.attributes!.price)
      }
    }),
    filterItems: filterItemsMock
  }
}

export default async function GamesPage() {
  const props = await getGameProps()
  return <GamesTemplate {...props} />
}
