'use client'
import { PropsWithChildren } from 'react'
import GlobalStyles from '@/styles/global'
import { ApolloWrapper } from '@/lib/apollo-provider'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ApolloWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ApolloWrapper>
  )
}
