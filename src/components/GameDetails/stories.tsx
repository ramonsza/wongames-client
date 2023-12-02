import { Meta, StoryObj } from '@storybook/react'
import mockGame from './mock'
import GameDetails, { GameDetailsProps } from '.'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    platforms: {
      control: 'check',
      options: ['linux', 'windows', 'mac']
    },
    releaseDate: {
      control: 'date'
    },
    genres: {
      control: 'check',
      options: ['Role-playing', 'Action', 'Adventure']
    }
  }
} as Meta

type Story = StoryObj<typeof GameDetails>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameDetails {...args} />
    </div>
  ),
  args: {
    ...(mockGame as GameDetailsProps)
  }
}
