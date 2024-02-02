import { Text, StyleSheet } from 'react-native'

import { Screen } from '@components/screen'

import { AppTabScreenProps } from '../../../types/navigation'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
