import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Favorites } from '@screens/app/Favorites'
import { Home } from '@screens/app/Home'
import { NewPost } from '@screens/app/NewPost'
import { Profile } from '@screens/app/Profile'

import { AppTabBar } from './components/AppTabBar'

export type AppTabParamList = {
  home: undefined
  profile: undefined
  favorites: undefined
  newPost: undefined
}

const Tab = createBottomTabNavigator<AppTabParamList>()

export const AppTabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <AppTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="newPost" component={NewPost} />
      <Tab.Screen name="favorites" component={Favorites} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  )
}
