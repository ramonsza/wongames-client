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
  },
  argTypes: {
    onFilter: { action: 'checked' }
  }
} as Meta

type Story = StoryObj<typeof ExploreSidebar>

export const Default: Story = {
  args: {
    items
  }
}

export const WithInitialValues: Story = {
  args: {
    items,
    initialValues: { windows: true, sort_by: 'low-to-high' },
    onFilter: () => console.log('teste')
  }
}
