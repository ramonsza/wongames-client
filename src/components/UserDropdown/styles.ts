import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 26rem;
    a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.lightGray};
    }

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      background: ${theme.colors.white};
      color: ${theme.colors.black};
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
      transition: background, color, ${theme.transition.default};
      &:hover {
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    }

    a > span {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const Username = styled.span`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};
  `}
`

export const Link = styled.a``
