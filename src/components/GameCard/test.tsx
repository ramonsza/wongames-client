import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'

import GameCard from '.'
import theme from '@/styles/theme'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should be render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByText(props.price)).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
    expect(screen.getByText(props.price)).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should be render a line-through in price when promotional', () => {
    const promotionalPrice = 'R$ 200,00'
    renderWithTheme(<GameCard {...props} promotionalPrice={promotionalPrice} />)

    expect(screen.getByText(props.price)).toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(screen.getByText(promotionalPrice)).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })

  it('should be render a filled icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
