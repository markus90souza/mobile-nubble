import { FC } from 'react'

import {
  Icon,
  ScreenProps,
  Text,
  Box,
  TouchableOpacityBox,
} from '@components/index'
import { useNavigation } from '@react-navigation/native'

type ScreenHeaderProps = Pick<ScreenProps, 'canGoBack' | 'title'>

const SIZE = 20
export const ScreenHeader: FC<ScreenHeaderProps> = ({ canGoBack, title }) => {
  const { goBack } = useNavigation()

  const handleGoBack = () => {
    goBack()
  }

  return (
    <Box
      mb="s24"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          onPress={handleGoBack}
        >
          <Icon size={SIZE} name="arrowLeft" color="primary" />

          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}

      {title && <Box width={SIZE} />}
    </Box>
  )
}
