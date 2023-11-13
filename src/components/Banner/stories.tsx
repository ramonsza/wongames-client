import { Meta, StoryObj } from '@storybook/react'
import Banner from '.'

export default {
  title: 'Banner',
  component: Banner
} as Meta

type Story = StoryObj<typeof Banner>

export const Default: Story = {
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x500',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
}
