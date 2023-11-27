import { EnvelopeSimple as MailIcon } from '@phosphor-icons/react'
import { Meta, StoryObj } from '@storybook/react'

import TextField from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: {
      control: false
    }
  }
} as Meta

type Story = StoryObj<typeof TextField>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  ),
  args: {
    icon: <MailIcon size={22}></MailIcon>
  }
}

export const WithError: Story = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  ),
  args: {
    icon: <MailIcon size={22}></MailIcon>,
    error: 'Ops... something is wrong'
  }
}
