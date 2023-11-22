'use client'
import HomeTemplate, { HomeTemplateProps } from '@/templates/Home/index'

import bannersMock from '@/components/BannerSlider/mock'
import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

function getHome(): HomeTemplateProps {
  return {
    banners: bannersMock,
    newGames: gamesMock,
    mostPopularHighlight: highlightMock,
    mostPopularGames: gamesMock,
    upcomingGames: gamesMock,
    upcomingHighlight: highlightMock,
    upcomingMoreGames: gamesMock,
    freeGames: gamesMock,
    freeHighlight: highlightMock
  }
}

export default function Home() {
  const templateMock = getHome()
  return <HomeTemplate {...templateMock} />
}
