import {useAppTheme} from '../../hooks/useAppTheme';
import {ThemeColors} from '../../theme';

import {IconName, icons} from './types';

type IconProps = {
  name: IconName;
  color?: ThemeColors;
  size?: number;
};

export const Icon = ({name, color = 'backgroundContrast', size}: IconProps) => {
  const {colors} = useAppTheme();
  const SVGIcon = icons[name];
  return <SVGIcon color={colors[color]} size={size} />;
};
