import { Meta, StoryObj } from '@storybook/react'
import mockItems from './mock'
import CartList from '.'

export default {
  title: 'CartList',
  component: CartList,
  argTypes: {
    items: {
      control: false
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj<typeof CartList>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '800px' }}>
      <CartList {...args} />
    </div>
  ),
  args: {
    items: mockItems,
    total: 'R$ 430,00'
  }
}
