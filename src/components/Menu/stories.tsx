import { Meta, StoryObj } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj<typeof Menu>

export const Default: Story = {}

export const Logged: Story = {
  args: {
    $username: 'John Doe'
  }
}
