import { IconProps } from '@components/Icon'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ForgotPassword } from '@screens/auth/ForgotPassword'
import { Login } from '@screens/auth/Login'
import { SignUp } from '@screens/auth/SignUp'
import { Success } from '@screens/auth/Success'

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
const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

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
