import React from 'react'
import { StatusBar } from 'react-native'

import { Toast } from '@components/toast'
import { queryClient } from '@libs/query'
import { Router } from '@routes/index'
import { ThemeProvider } from '@shopify/restyle'
import { QueryClientProvider } from '@tanstack/react-query'
import { theme } from '@theme/index'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            barStyle={'dark-content'}
          />
          <Router />
          <Toast />
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}
