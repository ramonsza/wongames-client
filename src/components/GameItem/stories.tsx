import { Meta, StoryObj } from '@storybook/react'
import GameItem from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  argTypes: {
    paymentInfo: {
      control: false
    }
  }
} as Meta

type Story = StoryObj<typeof GameItem>

export const Default: Story = {
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
}

export const WithPayment: Story = {
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00',
    downloadLink: 'https://wongames.com/game/download',
    paymentInfo: {
      flag: 'mastercard',
      img: '/img/master-card.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }
  }
}
