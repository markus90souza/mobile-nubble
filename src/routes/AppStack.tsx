import { NavigatorScreenParams } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PostComment } from '@screens/app/post-comment'
import { Settings } from '@screens/app/settings'

import { AppTabParamList, AppTabs } from './AppTabs'

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
