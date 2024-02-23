import React, { FC, ReactNode } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

import { Box, BoxProps } from '@components/index'
import { useAppSafeArea } from '@hooks/useAppSafeArea'
import { useAppTheme } from '@hooks/useAppTheme'

import { ScrollContainer, ViewContainer } from './components/container'
import { ScreenHeader } from './components/screen-header'

export interface ScreenProps extends BoxProps {
  children: ReactNode
  canGoBack?: boolean
  scrollable?: boolean
  title?: string
}

export const Screen: FC<ScreenProps> = ({
  children,
  canGoBack = false,
  scrollable = false,
  title,
  style,
  ...boxProps
}) => {
  const { top, bottom } = useAppSafeArea()

  const { colors } = useAppTheme()
  const Container = scrollable ? ScrollContainer : ViewContainer

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
          <ScreenHeader canGoBack={canGoBack} title={title} />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}
