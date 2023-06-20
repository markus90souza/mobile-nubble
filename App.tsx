import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme/index';

import {Box, Button, Input, Text} from '@components/index';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{backgroundColor: '#F2F3F4', flex: 1}}>
        <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
        <View style={{paddingHorizontal: 24}}>
          <Text marginBottom="s8" preset="headingLarge">
            Olá
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <Box mb="s20">
            <Input label="E-mail" placeholder="Digite seu e-mail" />
          </Box>
          <Box>
            <Input label="E-mail" placeholder="Digite seu e-mail" />
            <Input label="Senha" placeholder="Digite sua senha" />
          </Box>

          <Text color="primary" preset="paragraphSmall" bold mt="s10">
            Esqueci minha senha
          </Text>

          <Button marginTop="s48" title="Entrar" />
          <Button variant="outline" marginTop="s12" title="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};
