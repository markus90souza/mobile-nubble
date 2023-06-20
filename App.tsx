import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme';
import {Button} from './src/components/Button';

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
        <Button title="Outline Loading" variant="outline" loading />
        <Button title="Primary Loading" variant="primary" loading />
        <Button title="Outline" variant="outline" />
        <Button title="Primary" variant="primary" />
        <Button title="Primary Disabled" variant="primary" disabled />
        <Button title="Outline Disabled" variant="outline" disabled />
        <Button title="Primary Disabled" variant="primary" disabled loading />
        <Button title="Outline Disabled" variant="outline" disabled loading />

        <Text italic bold>
          Coofe
        </Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
