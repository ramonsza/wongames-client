'use client'
import FormSignIn from '@/components/FormSignIn'
import Auth from '@/templates/Auth'

export default function SignUp() {
  return (
    <Auth title="Sign up">
      <FormSignIn />
    </Auth>
  )
}
