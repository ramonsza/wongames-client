import { Meta, StoryObj } from '@storybook/react'
import CartDropdown from '.'
import mockItems from '@/components/CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj<typeof CartDropdown>

export const Default: Story = {
  render: (args) => (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <CartDropdown {...args} />
    </div>
  ),
  args: {
    items: mockItems,
    total: 'R$ 300,00'
  }
}
