import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'

import bannerMock from '@/components/BannerSlider/mock'
import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

jest.mock('@/components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock menu"></div>
    }
  }
})

jest.mock('@/components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock footer"></div>
    }
  }
})

jest.mock('@/components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock showcase"></div>
    }
  }
})

jest.mock('@/components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock banner slider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock banner slider/i)).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(5)
    expect(screen.getByTestId(/mock footer/i)).toBeInTheDocument()
  })
})
