'use client'

import CardsList, { CardsListProps } from '@/components/CardsList'
import Profile from '@/templates/Profile'

import mockCards from '@/components/PaymentOptions/mock'

export function getCards(): CardsListProps {
  return {
    cards: mockCards
  }
}

export default function ProfileCards() {
  const { cards } = getCards()

  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}
