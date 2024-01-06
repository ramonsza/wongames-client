import Link from 'next/link'
import * as S from './styles'
import {
  ClipboardText,
  CreditCard,
  SignOut,
  UserCircle
} from '@phosphor-icons/react'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href={'/profile/me'} passHref legacyBehavior>
      <S.Link $isActive={activeLink === '/profile/me'} title="My Profile">
        <UserCircle size={24} />
        <span>My Profile</span>
      </S.Link>
    </Link>

    <Link href={'/profile/cards'} passHref legacyBehavior>
      <S.Link $isActive={activeLink === '/profile/cards'} title="My cards">
        <CreditCard size={24} />
        <span>My cards</span>
      </S.Link>
    </Link>

    <Link href={'/profile/orders'} passHref legacyBehavior>
      <S.Link $isActive={activeLink === '/profile/orders'} title="My Orders">
        <ClipboardText size={24} />
        <span>My Orders</span>
      </S.Link>
    </Link>

    <Link href={'/logout'} passHref legacyBehavior>
      <S.Link title="Sign out">
        <SignOut size={24} />
        <span>Sign out</span>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu
