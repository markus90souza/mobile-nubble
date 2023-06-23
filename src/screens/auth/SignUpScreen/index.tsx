import React from 'react';
import {Icon, Input, Text, Button, Screen} from '@components/index';

export const SignUpScreen = () => {
  const handleCreateAccount = () => {
    // Implementar
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

      <Input
        label="Sua Senha"
        placeholder="Digite sua senha"
        RightComponent={<Icon name="eyeOn" color="gray2" />}
        boxProps={{mb: 's20'}}
      />

      <Button title="Entrar" onPress={handleCreateAccount} />
    </Screen>
  );
};
