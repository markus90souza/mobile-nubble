import { Button, Text } from '@components/index'
import { Screen } from '@components/screen'

import { AppScreenProps } from '../../../types/navigation'

export function Settings({ navigation }: AppScreenProps<'settings'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Settings</Text>

      <Button
        title="Novo Post"
        onPress={() => navigation.navigate('appTabs', { screen: 'newPost' })}
      />
    </Screen>
  )
}
