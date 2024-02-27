import { Meta, StoryObj } from '@storybook/react'
import Dropdown from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: { default: 'won-dark' }
  }
} as Meta

type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  args: {
    title: 'click here',
    children: 'content'
  }
}
