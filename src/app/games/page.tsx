import { GamesTemplateProps } from '@/templates/Games'
import GamesTemplate from '@/templates/Games'
import gamesMock from '@/components/GameCardSlider/mock'
import filterItemsMock from '@/components/ExploreSidebar/mock'
export async function generateStaticParams() {
  return [{ slug: 'cyberpunk-2077' }]
}

async function getGameProps(): Promise<GamesTemplateProps> {
  return {
    games: gamesMock,
    filterItems: filterItemsMock
  }
}

export default async function GamesPage() {
  const props = await getGameProps()
  return <GamesTemplate {...props} />
}
