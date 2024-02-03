import { Box, Icon, Text, TouchableOpacityBox } from '@components/index'
import { useAppSafeArea } from '@hooks/useAppSafeArea'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { AppTabParamList } from '@routes/app-tabs'
import { $shadowProps } from '@theme/index'

import { mapScreenToProps } from './types'

export function AppTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { bottom } = useAppSafeArea()
  return (
    <Box
      paddingTop="s16"
      flexDirection="row"
      borderTopRightRadius="s24"
      borderTopLeftRadius="s24"
      backgroundColor="background"
      style={[
        {
          paddingBottom: bottom,
        },
        $shadowProps,
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const tabItem = mapScreenToProps[route.name as keyof AppTabParamList]

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacityBox
            flex={1}
            key={index}
            activeOpacity={1}
            alignItems="center"
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Icon
              color={isFocused ? 'primary' : 'backgroundContrast'}
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
            />
            <Text
              semiBold
              preset="paragraphCaption"
              color={isFocused ? 'primary' : 'backgroundContrast'}
            >
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        )
      })}
    </Box>
  )
}
