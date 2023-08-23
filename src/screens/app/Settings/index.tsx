import { Text, StyleSheet } from 'react-native'

import { Screen } from '@components/Screen'

import { AppStackProps } from '../../../types/navigation'

export function Settings({ navigation }: AppStackProps<'settings'>) {
  return (
    <Screen canGoBack>
      <Text style={styles.title}>Settings</Text>
    </Screen>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
})
