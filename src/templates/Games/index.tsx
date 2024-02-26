'use client'

import GameCard, { GameCardProps } from '@/components/GameCard'
import * as S from './styles'
import Base from '@/templates/Base'
import ExploreSidebar, { ItemProps } from '@/components/ExploreSidebar'
import { Grid } from '@/components/Grid'
import { CaretDown } from '@phosphor-icons/react'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ games = [], filterItems }: GamesTemplateProps) => {
  const handleFilters = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilters} />
        <section>
          <Grid>
            {games.map((item) => (
              <GameCard key={item.title} {...item} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <CaretDown size={35} weight="bold" />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
