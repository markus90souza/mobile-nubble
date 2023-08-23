import React from 'react';
import {Text, Button, Screen} from '@components/index';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@routes/Routes';
//import {useResetNavigation} from '@hooks/useResetNavigation';
import {useForm} from 'react-hook-form';
import {ControlledInput} from '@components/Form/ControlledInput';
import {ControlledPasswordInput} from '@components/Form/ControlledIPasswordnput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

type SignUpFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SignUpScreen = ({navigation}: ScreenProps) => {
  //const {reset} = useResetNavigation();

  const {control, handleSubmit, formState} = useForm<SignUpFormType>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
  });

  const handleCreateAccount = (data: SignUpFormType) => {
    console.log(data);
    // Implementar
    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  };

  return (
    <Screen canGoBack scrollable>
      <Text mb="s32" preset="headingLarge">
        Criar sua conta
      </Text>

      <ControlledInput
        name="username"
        control={control}
        rules={{required: 'O username é obrigário'}}
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />

      <ControlledInput
        name="fullName"
        control={control}
        rules={{required: 'O nome completo é obrigário'}}
        label="Nome completo"
        placeholder="Digite sue nome completo"
        boxProps={{mb: 's20'}}
      />

      <ControlledInput
        name="email"
        control={control}
        rules={{required: 'O email é obrigário'}}
        label="E-mail"
        placeholder="seu@email.com"
        boxProps={{mb: 's20'}}
      />

      <ControlledPasswordInput
        name="password"
        control={control}
        rules={{required: 'A senha é obrigária'}}
        label="Sua Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's20'}}
      />

      <Button
        disabled={!formState.isValid}
        title="Entrar"
        onPress={handleSubmit(handleCreateAccount)}
      />
    </Screen>
  );
};
