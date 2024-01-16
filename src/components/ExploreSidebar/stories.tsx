import { Meta, StoryObj } from '@storybook/react'
import ExploreSidebar from '.'

import items from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj<typeof ExploreSidebar>

export const Default: Story = {
  args: {
    items
  }
}
