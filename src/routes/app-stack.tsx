import { NavigatorScreenParams } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Settings, PostComment } from '@screens/app'

import { AppTabParamList, AppTabs } from './app-tabs'

export type AppStackParamList = {
  appTabs: NavigatorScreenParams<AppTabParamList>
  settings: undefined
  postComment: {
    postId: number
  }
}

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>()
export const AppStack = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
      initialRouteName="appTabs"
    >
      <Screen name="appTabs" component={AppTabs} />
      <Screen name="settings" component={Settings} />
      <Screen name="postComment" component={PostComment} />
    </Navigator>
  )
}
