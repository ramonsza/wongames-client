import { Meta, StoryObj } from '@storybook/react'
import CardsList from '.'

import cardsMock from '@/components/PaymentOptions/mock'

export default {
  title: 'Profile/CardsList',
  component: CardsList
} as Meta

type Story = StoryObj<typeof CardsList>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '850px', margin: 'auto' }}>
      <CardsList {...args} />
    </div>
  ),
  args: {
    cards: cardsMock
  }
}
