import React from 'react'
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'

import { useTheme } from '@shopify/restyle'
import { Theme, ThemeColors } from '@theme/index'

interface LoaderProps extends Omit<ActivityIndicatorProps, 'color'> {
  color?: ThemeColors
}

export const Loader = ({ color = 'primary' }: LoaderProps) => {
  const { colors } = useTheme<Theme>()
  return <ActivityIndicator color={colors[color]} />
}
