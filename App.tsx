import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme';

import {Icon} from './src/components/Icon';
import {Box} from './src/components/Box';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 12,
        }}>
        <Box flexDirection="column">
          <Icon name="eyeOn" size={40} color="errorLight" />
          <Icon name="eyeOff" size={40} color="error" />
        </Box>

        <Text italic bold>
          Coofe
        </Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
