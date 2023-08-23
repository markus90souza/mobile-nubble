import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/app/Home'
import { Settings } from '@screens/app/Settings'

export type AppStackParamList = {
  home: undefined
  settings: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>()
export const AppStack = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
      initialRouteName="home"
    >
      <Screen name="home" component={Home} />
      <Screen name="settings" component={Settings} />
    </Navigator>
  )
}
