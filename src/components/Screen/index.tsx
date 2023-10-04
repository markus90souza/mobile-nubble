import React, { FC, ReactNode } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

import {
  Box,
  BoxProps,
  Icon,
  Text,
  TouchableOpacityBox,
} from '@components/index'
import { useAppSafeArea } from '@hooks/useAppSafeArea'
import { useAppTheme } from '@hooks/useAppTheme'
import { useNavigation } from '@react-navigation/native'

import { ScrollContainer, ViewContainer } from './components/Container'

interface ScreenProps extends BoxProps {
  children: ReactNode
  canGoBack?: boolean
  scrollable?: boolean
}

export const Screen: FC<ScreenProps> = ({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  ...boxProps
}) => {
  const { top, bottom } = useAppSafeArea()

  const { colors } = useAppTheme()
  const Container = scrollable ? ScrollContainer : ViewContainer

  const { goBack } = useNavigation()

  const handleGoBack = () => {
    goBack()
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'android' ? undefined : 'padding'}
    >
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{ paddingTop: top, paddingBottom: bottom }, style]}
          {...boxProps}
        >
          {canGoBack && (
            <TouchableOpacityBox
              mb="s24"
              flexDirection="row"
              alignItems="center"
              onPress={handleGoBack}
            >
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}
