import { Text, StyleSheet } from 'react-native'

import { Button } from '@components/Button'
import { Screen } from '@components/Screen'

import { AppStackProps } from './../../../types/navigation'

export const Home = ({ navigation }: AppStackProps<'home'>) => {
  return (
    <Screen>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('settings')}
      />
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
