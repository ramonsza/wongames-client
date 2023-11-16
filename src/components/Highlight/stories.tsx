import { Meta, StoryObj } from '@storybook/react'
import Highlight from '.'

export default {
  title: 'Highlight',
  component: Highlight
} as Meta

type Story = StoryObj<typeof Highlight>

export const Default: Story = {
  args: {
    title: `Read Dead it's back`,
    subtitle: `Come see John's new adventure`,
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
}
