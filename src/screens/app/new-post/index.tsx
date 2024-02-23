import { Text, StyleSheet } from 'react-native'

import { Button } from '@components/button'
import { Screen } from '@components/screen'

import { AppTabScreenProps } from '../../../types/navigation'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const NewPost = ({ navigation }: AppTabScreenProps<'newPost'>) => {
  return (
    <Screen>
      <Text style={styles.title}>NOVA POSTAGEM</Text>
      <Button title="Settings" />
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
