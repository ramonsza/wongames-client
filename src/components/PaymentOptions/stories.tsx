import { Meta, StoryObj } from '@storybook/react'
import PaymentOptions from '.'

import mock from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    cards: {
      control: false
    },
    handlePayment: {
      action: 'clicked'
    }
  }
} as Meta

type Story = StoryObj<typeof PaymentOptions>

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 400 }}>
      <PaymentOptions {...args} />
    </div>
  ),
  args: {
    cards: mock
  }
}
