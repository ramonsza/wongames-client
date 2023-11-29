import Link from 'next/link'
import { EnvelopeSimple as MailIcon } from '@phosphor-icons/react'
import { LockKey as LockIcon } from '@phosphor-icons/react'
import TextField from '@/components/TextField'
import { FormWrapper, FormLink } from '@/components/Form/'
import * as S from './styles'
import Button from '@/components/Button'

const FormSignIn = () => (
  <FormWrapper>
    <form>
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
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
      <Button $size="large" $fullWidth>
        Sign in now
      </Button>

      <FormLink>
        Don&apos;t have an account <Link href="/sign-up">Sign up</Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
