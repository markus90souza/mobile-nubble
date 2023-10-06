import { NavigatorScreenParams } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PostComment } from '@screens/app/PostComment'
import { Settings } from '@screens/app/Settings'

import { AppTabParamList, AppTabs } from './AppTabs'

export type AppStackParamList = {
  appTabs: NavigatorScreenParams<AppTabParamList>
  settings: undefined
  postComments: {
    postId: string
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
      <Screen name="postComments" component={PostComment} />
    </Navigator>
  )
}
