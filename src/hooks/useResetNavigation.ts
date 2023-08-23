import { useNavigation } from '@react-navigation/native'
import { AuthStackParamList } from '@routes/AuthStack'

export const useResetNavigation = () => {
  const navigation = useNavigation()

  const reset = (params: AuthStackParamList['success']) => {
    navigation.reset({
      index: 1,
      routes: [{ name: 'login' }, { name: 'success', params }],
    })
  }

  return { reset }
}
