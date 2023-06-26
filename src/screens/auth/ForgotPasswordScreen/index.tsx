import React from 'react';
import {Screen, Text, Input, Button} from '@components/index';

import {RootStackParamList} from '@routes/Routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useResetNavigation} from '@hooks/useResetNavigation';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export const ForgotPasswordScreen = ({navigation}: ScreenProps) => {
  const {reset} = useResetNavigation();

  const handleForgotPassword = () => {
    reset({
      title: `Enviamos as ${'\n'}instruções para seu e-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  };
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" marginBottom="s16">
        Esqueci minha {'\n'}senha
      </Text>

      <Text preset="paragraphLarge" marginBottom="s32">
        Digite seu e-mail e enviaremos as {'\n'} instruções para redefinição de
        senha
      </Text>

      <Input
        boxProps={{
          marginBottom: 's40',
        }}
        label="E-mail"
        placeholder="Digite seu e-mail"
      />

      <Button title="Recuperar senha" onPress={handleForgotPassword} />
    </Screen>
  );
};
