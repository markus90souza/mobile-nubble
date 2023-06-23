import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme/index';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {LoginScreen} from '@screens/auth/LoginScreen';

export const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1, backgroundColor: '#FFF'}}>
      <ThemeProvider theme={theme}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <LoginScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
