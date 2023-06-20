import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';
import {Theme, ThemeColors} from '../../theme';
import {useTheme} from '@shopify/restyle';

interface LoaderProps extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export const Loader = ({color}: LoaderProps) => {
  const {colors} = useTheme<Theme>();
  return <ActivityIndicator color={colors[color]} />;
};
