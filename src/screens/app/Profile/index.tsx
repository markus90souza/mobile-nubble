import { Text, StyleSheet } from 'react-native'

import { Button } from '@components/Button'
import { Screen } from '@components/Screen'

import { AppTabScreenProps } from '../../../types/navigation'

export const Profile = ({ navigation }: AppTabScreenProps<'profile'>) => {
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
