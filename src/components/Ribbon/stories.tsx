import { Meta, StoryObj } from '@storybook/react'
import Ribbon from '.'

export default {
  title: 'Ribbon',
  component: Ribbon
} as Meta

type Story = StoryObj<typeof Ribbon>

export const Default: Story = {
  render: ({ children, $color }, args) => (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        backgroundColor: '#888'
      }}
    >
      <Ribbon $color={$color} {...args}>
        {children}
      </Ribbon>
    </div>
  ),
  args: {
    $color: 'primary',
    children: 'Best Seller'
  },
  argTypes: {
    children: { type: 'string' }
  }
}
