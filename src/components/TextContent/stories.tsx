import { Meta, StoryObj } from '@storybook/react'
import TextContent from '.'
import TextMock from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj<typeof TextContent>

export const Default: Story = {
  args: {
    ...TextMock
  }
}
