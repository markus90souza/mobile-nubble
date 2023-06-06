import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import {$fontSizes, TextVariants, getFontFamily} from './types';

interface TextProps extends RNTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

export function Text({
  children,
  style,
  preset = 'paragraphMedium',
  bold,
  italic,
  semiBold,
  ...rest
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, italic, semiBold);
  return (
    <RNText style={[$fontSizes[preset], {fontFamily}, style]} {...rest}>
      {children}
    </RNText>
  );
}
