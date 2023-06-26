import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Router} from '@routes/Routes';

export const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
