import { screen } from '@testing-library/react'

import Profile from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Profile />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Profile>
        <h1>Test children</h1>
      </Profile>
    )

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()
  })
})
