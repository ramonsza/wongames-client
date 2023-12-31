import Link from 'next/link'
import { List as MenuIcon } from '@phosphor-icons/react'
import { ShoppingCart as ShoppingCartIcon } from '@phosphor-icons/react'
import { MagnifyingGlass as SearchIcon } from '@phosphor-icons/react'
import { X as CloseIcon } from '@phosphor-icons/react'

import Logo from '@/components/Logo'
import Button from '@/components/Button'

import * as S from './styles'

import { useState } from 'react'
import MediaMatch from '@/components/MediaMatch'

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
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" size={24} />
        </S.IconWrapper>

        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" size={24} />
        </S.IconWrapper>

        {!$username && (
          <MediaMatch $greaterThan="medium">
            <Link href="/sign-in" passHref legacyBehavior>
              <Button as="a">Sign in</Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} $isOpen={isOpen}>
        <CloseIcon
          size={24}
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
        />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>

          {!!$username && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
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
              <S.CreateAccount href="#" title="Sign Up">
                Sign up
              </S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
