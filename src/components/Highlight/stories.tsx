import { Meta, StoryObj } from '@storybook/react'
import Highlight from '.'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
} as Meta

type Story = StoryObj<typeof Highlight>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
}

export const WithFloatImage: Story = {
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  ),
  args: {
    floatImage: '/img/red-dead-float.png'
  }
}
