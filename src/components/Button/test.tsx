import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size button by default', () => {
    const { container } = renderWithTheme(<Button>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    const { container } = renderWithTheme(
      <Button $size="small">Buy Now</Button>
    )

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the large size', () => {
    const { container } = renderWithTheme(
      <Button $size="large">Buy Now</Button>
    )

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a full width version', () => {
    const { container } = renderWithTheme(<Button $fullWidth>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      width: '100%'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
