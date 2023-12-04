import { Meta, StoryObj } from '@storybook/react'
import mockGallery from './mock'

import Gallery from '.'

export default {
  title: 'Gallery',
  component: Gallery,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj<typeof Gallery>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <Gallery {...args} />
    </div>
  ),
  args: {
    items: mockGallery
  }
}
