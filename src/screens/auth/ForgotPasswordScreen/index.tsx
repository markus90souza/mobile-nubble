import React from 'react';
import {Screen, Text, Button} from '@components/index';

import {RootStackParamList} from '@routes/Routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
//import {useResetNavigation} from '@hooks/useResetNavigation';
import {ControlledInput} from '@components/Form/ControlledInput';
import {zodResolver} from '@hookform/resolvers/zod';
import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';
import {useForm} from 'react-hook-form';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ForgotPasswordScreen = ({navigation}: ScreenProps) => {
  //const {reset} = useResetNavigation();

  const {control, handleSubmit, formState} = useForm<ForgotPasswordSchema>({
    mode: 'onChange',
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const handleForgotPassword = (data: ForgotPasswordSchema) => {
    console.log(data);
    // reset({
    //   title: `Enviamos as ${'\n'}instruções para seu e-mail`,
    //   description:
    //     'Clique no link enviado no seu e-mail para recuperar sua senha',
    //   icon: {
    //     name: 'messageRound',
    //     color: 'primary',
    //   },
    // });
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

      <ControlledInput
        name="email"
        control={control}
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{
          marginBottom: 's40',
        }}
      />

      {/* <Input
        boxProps={{
          marginBottom: 's40',
        }}
        label="E-mail"
        placeholder="Digite seu e-mail"
      /> */}

      <Button
        disabled={!formState.isValid}
        title="Recuperar senha"
        onPress={handleSubmit(handleForgotPassword)}
      />
    </Screen>
  );
};
