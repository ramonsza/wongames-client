import Link from 'next/link'
import { EnvelopeSimple as MailIcon } from '@phosphor-icons/react'
import { LockKey as LockIcon } from '@phosphor-icons/react'
import { UserCircle as UserIcon } from '@phosphor-icons/react'

import Button from '@/components/Button'
import TextField from '@/components/TextField'

import * as S from './styles'

const FormSignUp = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="name"
        icon={<UserIcon size={22} />}
      />
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<MailIcon size={22} />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<LockIcon size={22} />}
      />
      <TextField
        name="confirm-password"
        placeholder="Confirm password"
        type="password"
        icon={<LockIcon size={22} />}
      />

      <Button $size="large" $fullWidth>
        Sign up now
      </Button>

      <S.FormLink>
        Already have an account? <Link href="/sign-in">Sign in</Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignUp
