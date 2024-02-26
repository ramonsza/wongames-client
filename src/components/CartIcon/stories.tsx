import { Meta, StoryObj } from '@storybook/react'
import CartIcon from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj<typeof CartIcon>

export const Default: Story = {}

export const WhitItems: Story = {
  args: {
    quantity: 12
  }
}
