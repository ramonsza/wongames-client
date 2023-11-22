import { Meta, StoryObj } from '@storybook/react'
import GameCardSlider from '.'
import items from './mock'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj<typeof GameCardSlider>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameCardSlider {...args} />
    </div>
  ),
  args: {
    items,
    color: 'white'
  },
  argTypes: {
    items: {
      control: false
    }
  }
}
