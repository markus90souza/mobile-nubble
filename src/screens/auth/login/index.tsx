import React from 'react'

import { ControlledInput } from '@components/form/ControlledInput'
import { ControlledPasswordInput } from '@components/form/ControlledPasswordnput'
import { Text, Button, Screen } from '@components/index'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { AuthScreenProps } from './../../../types/navigation'
import { LoginSchema, loginSchema } from './loginSchema'

export const Login = ({ navigation }: AuthScreenProps<'login'>) => {
  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleLoginForm = (data: LoginSchema) => {
    console.log(data)
  }

  const handleNavigateToSignUpScreen = () => {
    navigation.navigate('signUp')
  }

  const handleNavigateForgotPasswordScreen = () => {
    navigation.navigate('forgotPassword')
  }
  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>

      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <ControlledInput
        name="email"
        control={control}
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{
          mb: 's20',
        }}
      />

      <ControlledPasswordInput
        name="password"
        control={control}
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{
          mb: 's8',
        }}
      />

      <Text
        color="primary"
        preset="paragraphSmall"
        bold
        mt="s10"
        onPress={handleNavigateForgotPasswordScreen}
      >
        Esqueci minha senha
      </Text>

      <Button
        marginTop="s48"
        title="Entrar"
        disabled={!formState.isValid}
        onPress={handleSubmit(handleLoginForm)}
      />
      <Button
        variant="outline"
        marginTop="s12"
        title="Criar uma conta"
        onPress={handleNavigateToSignUpScreen}
      />
    </Screen>
  )
}
