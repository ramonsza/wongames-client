import { Meta, StoryObj } from '@storybook/react'
import FormSignIn from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div style={{ width: '300px', margin: 'auto' }}>
      <FormSignIn />
    </div>
  )
}
