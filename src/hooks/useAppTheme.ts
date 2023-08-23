import { useTheme } from '@shopify/restyle'
import { Theme } from '@theme/index'

export const useAppTheme = () => {
  return useTheme<Theme>()
}
