import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text bold preset="headingLarge">
        NubbleApp
      </Text>
    </SafeAreaView>
  );
}

export default App;
