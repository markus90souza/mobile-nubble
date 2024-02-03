import { IconProps } from '@components/icon'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Success, ForgotPassword, Login, SignUp } from '@screens/auth'

export type AuthStackParamList = {
  login: undefined
  signUp: undefined
  forgotPassword: undefined
  success: {
    title: string
    description: string
    icon: Pick<IconProps, 'name' | 'color'>
  }
}
const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>()

export const AuthStack = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
      initialRouteName="login"
    >
      <Screen name="login" component={Login} />
      <Screen name="signUp" component={SignUp} />
      <Screen name="forgotPassword" component={ForgotPassword} />
      <Screen name="success" component={Success} />
    </Navigator>
  )
}
