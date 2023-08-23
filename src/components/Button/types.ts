import { TouchableOpacityBoxProps } from '@components/Box'
import { ThemeColors } from '@theme/index'

export type ButtonVariant = 'outline' | 'primary'

interface ButtonUI {
  container: TouchableOpacityBoxProps
  content: ThemeColors
}

export const buttonVariants: Record<
  ButtonVariant,
  {
    default: ButtonUI
    disabled: ButtonUI
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: 'gray2',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary',
      },
      content: 'primary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: 'gray2',
    },
  },
}
