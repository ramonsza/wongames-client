import { screen } from '@testing-library/react'
import gamesMock from '@/components/GameCardSlider/mock'
import filterItemsMock from '@/components/ExploreSidebar/mock'

import Games from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

jest.mock('@/components/ExploreSidebar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Explore Sidebar"></div>
    }
  }
})

jest.mock('@/components/GameCard', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameCard"></div>
    }
  }
})

describe('<Games />', () => {
  it('should render the Games template', () => {
    renderWithTheme(<Games filterItems={filterItemsMock} games={gamesMock} />)

    expect(screen.getByTestId(/mock explore sidebar/i)).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock GameCard/i)).toHaveLength(6)
    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
