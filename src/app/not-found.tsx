'use client'
import Empty from '@/components/Empty'
import Base from '@/templates/Base'

export default function Custom404() {
  return (
    <Base>
      <Empty
        title="404: Not Found"
        description="Ops... this page does not exist. Go back to the store and enjoy our offers"
        hasLink
      />
    </Base>
  )
}
