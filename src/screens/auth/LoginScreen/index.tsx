import React from 'react';
import {Text, Button, Screen} from '@components/index';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@routes/Routes';
import {useForm} from 'react-hook-form';
import {LoginSchema, loginSchema} from './loginSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {ControlledInput} from '@components/Form/ControlledInput';
import {ControlledPasswordInput} from '@components/Form/ControlledIPasswordnput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export const LoginScreen = ({navigation}: ScreenProps) => {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLoginForm = (data: LoginSchema) => {
    console.log(data);
  };

  const handleNavigateToSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  const handleNavigateForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordScreen');
  };
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
        onPress={handleNavigateForgotPasswordScreen}>
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
  );
};
