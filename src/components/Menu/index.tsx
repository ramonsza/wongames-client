import Link from 'next/link'
import { List as MenuIcon } from '@phosphor-icons/react'
import { MagnifyingGlass as SearchIcon } from '@phosphor-icons/react'
import { X as CloseIcon } from '@phosphor-icons/react'

import Logo from '@/components/Logo'
import Button from '@/components/Button'

import * as S from './styles'

import { useState } from 'react'
import MediaMatch from '@/components/MediaMatch'
import CartDropdown from '@/components/CartDropdown'
import CartIcon from '@/components/CartIcon'
import UserDropdown from '@/components/UserDropdown'

export type MenuProps = {
  $username?: string
}

const Menu = ({ $username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch $lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" size={24} />
        </S.IconWrapper>
      </MediaMatch>
      <S.LogoWrapper>
        <Link href={'/'}>
          <Logo $hideOnMobile />
        </Link>
      </S.LogoWrapper>

      <MediaMatch $greaterThan="medium">
        <S.MenuNav>
          <Link href={'/'} passHref legacyBehavior>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref legacyBehavior>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" size={24} />
        </S.IconWrapper>

        <S.IconWrapper>
          <MediaMatch $greaterThan="medium">
            <CartDropdown />
          </MediaMatch>

          <MediaMatch $lessThan="medium">
            <Link href={'/cart'}>
              <CartIcon />
            </Link>
          </MediaMatch>
        </S.IconWrapper>
        <MediaMatch $greaterThan="medium">
          {$username ? (
            <UserDropdown username={$username}></UserDropdown>
          ) : (
            <Link href="/sign-in" passHref legacyBehavior>
              <Button as="a">Sign in</Button>
            </Link>
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} $isOpen={isOpen}>
        <CloseIcon
          size={24}
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
        />
        <S.MenuNav>
          <S.MenuLink href="/">Home</S.MenuLink>
          <S.MenuLink href="/games">Explore</S.MenuLink>

          {!!$username && (
            <>
              <Link href="/profile/me" passHref legacyBehavior>
                <S.MenuLink>My profile</S.MenuLink>
              </Link>
              <Link href="/wishlist" passHref legacyBehavior>
                <S.MenuLink href="/wishlist">Wishlist</S.MenuLink>
              </Link>
            </>
          )}
        </S.MenuNav>

        {!$username && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref legacyBehavior>
              <Button $fullWidth $size="large">
                Log in now
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref legacyBehavior>
              <S.CreateAccount title="Sign Up">Sign up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
