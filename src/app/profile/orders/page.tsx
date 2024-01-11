'use client'

import Profile from '@/templates/Profile'

import mockItems from '@/components/OrdersList/mock'
import OrdersList, { OrderListProps } from '@/components/OrdersList'

export function getOrders(): OrderListProps {
  return {
    items: mockItems
  }
}

export default function ProfileOrders() {
  const { items } = getOrders()

  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}
