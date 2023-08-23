import React, { ComponentProps } from 'react'

import { createText } from '@shopify/restyle'
import { Theme } from '@theme/index'

import { $fontSizes, TextVariants, getFontFamily } from './types'

const RSText = createText<Theme>()
type RSTextProps = ComponentProps<typeof RSText>
interface TextProps extends RSTextProps {
  preset?: TextVariants
  bold?: boolean
  italic?: boolean
  semiBold?: boolean
}

export const Text = ({
  children,
  style,
  preset = 'paragraphMedium',
  bold,
  italic,
  semiBold,
  ...rest
}: TextProps) => {
  const fontFamily = getFontFamily(preset, bold, italic, semiBold)
  return (
    <RSText
      color="backgroundContrast"
      style={[$fontSizes[preset], { fontFamily }, style]}
      {...rest}
    >
      {children}
    </RSText>
  )
}
