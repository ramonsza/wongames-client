import { Meta, StoryObj } from '@storybook/react'
import { ShoppingCart } from '@phosphor-icons/react'
import Button from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Buy Now'
  }
}

export const WithIcon: Story = {
  args: {
    children: 'Buy Now',
    $icon: <ShoppingCart />
  },
  argTypes: {
    $icon: {
      control: false
    }
  }
}
