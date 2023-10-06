import { FC } from 'react'

import { Box, TouchableOpacityBox } from '@components/Box'
import { Icon, ScreenProps, Text } from '@components/index'
import { useNavigation } from '@react-navigation/native'

type ScreenHeaderProps = Pick<ScreenProps, 'canGoBack' | 'title'>

export const ScreenHeader: FC<ScreenHeaderProps> = ({ canGoBack, title }) => {
  const { goBack } = useNavigation()

  const handleGoBack = () => {
    goBack()
  }

  return (
    <Box>
      {canGoBack && (
        <TouchableOpacityBox
          mb="s24"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          onPress={handleGoBack}
        >
          <Icon name="arrowLeft" color="primary" />

          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}

          {title && <Text preset="headingSmall">{title}</Text>}

          {title && <Box width={20} />}
        </TouchableOpacityBox>
      )}
    </Box>
  )
}
