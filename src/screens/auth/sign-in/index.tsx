import React from 'react'

import { ControlledInput } from '@components/form/ControlledInput'
import { ControlledPasswordInput } from '@components/form/ControlledPasswordnput'
import { Text, Button, Screen } from '@components/index'
import { zodResolver } from '@hookform/resolvers/zod'
// import {useResetNavigation} from '@hooks/useResetNavigation';
import { useForm } from 'react-hook-form'

import { AuthScreenProps } from './../../../types/navigation'
import { SignUpSchema, signUpSchema } from './signUpSchema'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SignUp = ({ navigation }: AuthScreenProps<'signUp'>) => {
  // const {reset} = useResetNavigation();

  const { control, handleSubmit, formState } = useForm<SignUpSchema>({
    mode: 'onChange',
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
  })

  const handleCreateAccount = (data: SignUpSchema) => {
    console.log(data)
    // Implementar
    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  }

  return (
    <Screen canGoBack scrollable>
      <Text mb="s32" preset="headingLarge">
        Criar sua conta
      </Text>

      <ControlledInput
        name="username"
        control={control}
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: 's20' }}
      />

      <ControlledInput
        name="fullName"
        control={control}
        label="Nome completo"
        placeholder="Digite sue nome completo"
        boxProps={{ mb: 's20' }}
      />

      <ControlledInput
        name="email"
        control={control}
        label="E-mail"
        placeholder="seu@email.com"
        boxProps={{ mb: 's20' }}
      />

      <ControlledPasswordInput
        name="password"
        control={control}
        label="Sua Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's20' }}
      />

      <Button
        disabled={!formState.isValid}
        title="Entrar"
        onPress={handleSubmit(handleCreateAccount)}
      />
    </Screen>
  )
}
