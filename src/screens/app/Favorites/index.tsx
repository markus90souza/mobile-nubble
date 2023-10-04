import { Text, StyleSheet } from 'react-native'

import { Button } from '@components/Button'
import { Screen } from '@components/Screen'

import { AppTabScreenProps } from '../../../types/navigation'

export const Favorites = ({ navigation }: AppTabScreenProps<'favorites'>) => {
  return (
    <Screen>
      <Text style={styles.title}>FAVARITOS</Text>
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
