import React from 'react'
import { StatusBar } from 'react-native'

import { Router } from '@routes/index'
import { ThemeProvider } from '@shopify/restyle'
import { theme } from '@theme/index'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaProvider style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
