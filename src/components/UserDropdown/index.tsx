import Dropdown from '@/components/Dropdown'
import * as S from './styles'
import { CaretDown, Heart, SignOut, UserCircle } from '@phosphor-icons/react'
import Link from 'next/link'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <UserCircle size={24} />
        <S.Username>{username}</S.Username>
        <CaretDown size={24} />
      </>
    }
  >
    <S.Nav>
      <Link href={'/profile/me'} passHref>
        <UserCircle size={24} />
        <span>My profile</span>
      </Link>

      <Link href="/wishlist" passHref>
        <Heart size={24} />
        <span>Wishlist</span>
      </Link>

      <Link href="/logout" passHref>
        <SignOut size={24} />
        <span>Sign out</span>
      </Link>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown
