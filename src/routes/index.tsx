import { NavigationContainer } from '@react-navigation/native'

import { AppStack } from './app-stack'
import { AuthStack } from './auth-stack'

export const Router = () => {
  const isAuth = true
  return (
    <NavigationContainer>
      {isAuth ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
