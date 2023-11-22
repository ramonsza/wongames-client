import { Meta, StoryObj } from '@storybook/react'
import BannerSlider from '.'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

import items from './mock'

type Story = StoryObj<typeof BannerSlider>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <BannerSlider {...args} />
    </div>
  ),
  args: {
    items
  }
}
