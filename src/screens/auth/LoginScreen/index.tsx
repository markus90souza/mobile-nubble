import React from 'react';
import {Input, Text, Button} from '@components/index';
import {Screen} from '@components/Screen';
import {PasswordInput} from '@components/PasswordInput';

export const LoginScreen = () => {
  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>

      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <Input
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{
          mb: 's20',
        }}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{
          mb: 's20',
        }}
      />

      <Text color="primary" preset="paragraphSmall" bold mt="s10">
        Esqueci minha senha
      </Text>

      <Button marginTop="s48" title="Entrar" />
      <Button variant="outline" marginTop="s12" title="Criar uma conta" />
    </Screen>
  );
};
