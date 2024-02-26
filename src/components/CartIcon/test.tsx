import { screen } from '@testing-library/react'

import CartIcon from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart item/i)).not.toBeInTheDocument()
  })

  it('should render with badge', () => {
    renderWithTheme(<CartIcon quantity={12} />)

    expect(screen.getByLabelText(/cart item/i)).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
  })

  it('should render with badge only if has positive numbers', () => {
    renderWithTheme(<CartIcon quantity={-1} />)

    expect(screen.queryByLabelText(/cart item/i)).not.toBeInTheDocument()
    expect(screen.queryByAltText('-1')).not.toBeInTheDocument()
  })
})
