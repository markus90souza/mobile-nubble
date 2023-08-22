import {ComponentProps} from 'react';
import {
  createBox,
  createRestyleComponent,
  layout,
  LayoutProps,
  border,
  BorderProps,
  backgroundColor,
  BackgroundColorProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';
import {Theme} from '@theme/index';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export const Box = createBox<Theme>();
export type BoxProps = ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BorderProps<Theme> &
  TouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, border, layout, spacing, spacingShorthand],
  TouchableOpacity,
);
