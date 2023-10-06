import { Box, Button, Text } from '@components/index'
import { Screen } from '@components/Screen'

import { AppScreenProps } from '../../../types/navigation'

export function PostComment({ navigation }: AppScreenProps<'postComments'>) {
  return (
    <Screen canGoBack title="Comentários">
      <Box>
        <Text preset="headingSmall">Settings</Text>
      </Box>
    </Screen>
  )
}
