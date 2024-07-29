import { Meta, StoryObj } from '@storybook/react'
import GameCard from '.'

export default {
  title: 'GameCard',
  component: GameCard
} as Meta

type Story = StoryObj<typeof GameCard>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  ),
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    slug: 'population-zero',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00',
    ribbon: 'R$ 35 OFF',
    ribbonColor: 'primary',
    ribbonSize: 'small'
  },
  argTypes: {
    onFav: {
      action: 'clicked'
    },
    ribbon: { type: 'string' }
  }
}
