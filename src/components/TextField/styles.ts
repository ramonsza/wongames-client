import styled, { DefaultTheme, css } from 'styled-components'

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

type IconPositionProps = {
  $iconPosition: 'left' | 'right'
}

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, $iconPosition }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.2rem;
    color: ${theme.colors.gray};
    & > svg {
      width: 100%;
    }

    order: ${$iconPosition === 'left' ? 0 : 1};
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, $iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${$iconPosition}: ${theme.spacings.xxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }
  `
}

type WrapperProps = {
  $disable: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, $disable }) => css`
    ${$disable && wrapperModifiers.disabled(theme)}
  `}
`
