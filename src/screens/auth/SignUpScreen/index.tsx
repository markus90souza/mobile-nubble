import React from 'react';
import {Input, Text, Button, Screen} from '@components/index';
import {PasswordInput} from '@components/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@routes/Routes';
import {useResetNavigation} from '@hooks/useResetNavigation';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SignUpScreen = ({navigation}: ScreenProps) => {
  const {reset} = useResetNavigation();

  const handleCreateAccount = () => {
    // Implementar

    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  };

  return (
    <Screen canGoBack scrollable>
      <Text mb="s32" preset="headingLarge">
        Criar sua conta
      </Text>

      <Input label="Seu username" placeholder="@" boxProps={{mb: 's20'}} />

      <Input
        label="Nome completo"
        placeholder="Digite sue nome completo"
        boxProps={{mb: 's20'}}
      />

      <Input
        label="E-mail"
        placeholder="seu@email.com"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        label="Sua Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's20'}}
      />

      <Button title="Entrar" onPress={handleCreateAccount} />
    </Screen>
  );
};
