import { IconProps } from '@components/index'
import { AppTabParamList } from '@routes/app-tabs'

export const mapScreenToProps: Record<
  keyof AppTabParamList,
  {
    label: string
    icon: {
      focused: IconProps['name']
      unfocused: IconProps['name']
    }
  }
> = {
  home: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  newPost: {
    label: 'Novo post',
    icon: {
      focused: 'newPost',
      unfocused: 'newPost',
    },
  },
  favorites: {
    label: 'Favorito',
    icon: {
      focused: 'bookmarkFill',
      unfocused: 'bookmark',
    },
  },
  profile: {
    label: 'Meu perfil',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
}
