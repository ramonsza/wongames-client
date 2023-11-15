import { Meta, StoryObj } from '@storybook/react'
import Banner from '.'

export default {
  title: 'Banner',
  component: Banner
} as Meta

type Story = StoryObj<typeof Banner>

const bannerArgs = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x500',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

export const Default: Story = {
  args: {
    ...bannerArgs
  },
  parameters: {
    layout: 'fullscreen'
  }
}

export const WithRibbon: Story = {
  render: (args) => (
    <div
      style={{
        maxWidth: '100rem',
        margin: '0 auto'
      }}
    >
      <Banner {...args} />
    </div>
  ),
  args: {
    ...bannerArgs,
    ribbon: '20% OFF',
    ribbonSize: 'normal',
    ribbonColor: 'primary'
  },
  parameters: {
    layout: 'fullscreen'
  }
}
