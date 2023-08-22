import React from 'react';
import {Input, Text, Button, Screen, PasswordInput} from '@components/index';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@routes/Routes';
import {Controller, useForm} from 'react-hook-form';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

type LoginFormData = {
  email: string;
  password: string;
};

export const LoginScreen = ({navigation}: ScreenProps) => {
  const {control, formState, handleSubmit} = useForm<LoginFormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLoginForm = (data: LoginFormData) => {
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

      <Controller
        name="email"
        control={control}
        rules={{required: 'Email e obrigatorio'}}
        render={({field, fieldState: {error}}) => (
          <Input
            onChangeText={field.onChange}
            value={field.value}
            errorMessage={error?.message}
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{
              mb: 's20',
            }}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{required: 'Senha e obrigatorio'}}
        render={({field, fieldState: {error}}) => (
          <PasswordInput
            onChangeText={field.onChange}
            value={field.value}
            errorMessage={error?.message}
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{
              mb: 's8',
            }}
          />
        )}
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
