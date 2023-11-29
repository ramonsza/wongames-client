import { Meta, StoryObj } from '@storybook/react'
import FormSignUp from '.'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div style={{ width: '300px', margin: 'auto' }}>
      <FormSignUp />
    </div>
  )
}
