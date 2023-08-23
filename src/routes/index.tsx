import { NavigationContainer } from '@react-navigation/native'

import { AppStack } from './AppStack'
import { AuthStack } from './AuthStack'

export const Router = () => {
  const isAuth = true
  return (
    <NavigationContainer>
      {isAuth ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
