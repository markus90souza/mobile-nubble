import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Favorites } from '@screens/app/favorites'
import { Home } from '@screens/app/home'
import { NewPost } from '@screens/app/new-post'
import { Profile } from '@screens/app/profile'

import { AppTabBar } from './components/app-tabBar'

export type AppTabParamList = {
  home: undefined
  profile: {
    userId: number
  }
  favorites: undefined
  newPost: undefined
}

const Tab = createBottomTabNavigator<AppTabParamList>()

export const AppTabs = () => {
  return (
    <Tab.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
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
