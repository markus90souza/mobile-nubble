import React from 'react';
import {Pressable} from 'react-native';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ThemeColors} from '../../theme';

import {IconName, icons} from './types';

export type IconProps = {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
};

export const Icon = ({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) => {
  const {colors} = useAppTheme();
  const SVGIcon = icons[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
};
