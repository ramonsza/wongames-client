import { screen } from '@testing-library/react'

import Auth from '.'

import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByLabelText(/Won Games/i)).toHaveLength(2)

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /auth title/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
