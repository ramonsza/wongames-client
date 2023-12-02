import { Meta, StoryObj } from '@storybook/react'
import GameInfoMock from './mock'

import GameInfo from '.'

export default {
  title: 'GameInfo',
  component: GameInfo,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj<typeof GameInfo>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: 'auto' }}>
      <GameInfo {...args} />
    </div>
  ),

  args: {
    ...GameInfoMock
  }
}
