import { Meta, StoryObj } from '@storybook/react'
import Showcase from '.'

import highlightMock from '@/components/Highlight/mock'
import gamesMock from '@/components/GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    highlight: {
      control: false
    },
    games: {
      control: false
    }
  }
} as Meta

type Story = StoryObj<typeof Showcase>

export const Default: Story = {
  args: {
    title: 'Most Popular',
    highlight: highlightMock,
    games: gamesMock
  }
}

export const WithoutTitle: Story = {
  args: {
    highlight: highlightMock,
    games: gamesMock
  }
}

export const WithoutHighlight: Story = {
  args: {
    title: 'Most Popular',
    games: gamesMock
  }
}

export const WithoutGames: Story = {
  args: {
    title: 'Most Popular',
    highlight: highlightMock
  }
}
