import { Meta, StoryObj } from '@storybook/react'
import OrdersList from '.'

import itemsMock from './mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList
} as Meta

type Story = StoryObj<typeof OrdersList>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
      <OrdersList {...args} />
    </div>
  ),
  args: {
    items: itemsMock
  }
}
