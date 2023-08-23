import React from 'react';
import {Input, Text, Button, Screen} from '@components/index';
import {PasswordInput} from '@components/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@routes/Routes';
import {useResetNavigation} from '@hooks/useResetNavigation';
import {Controller, useForm} from 'react-hook-form';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

type SignUpFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SignUpScreen = ({navigation}: ScreenProps) => {
  const {reset} = useResetNavigation();

  const {control, handleSubmit, formState} = useForm<SignUpFormType>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
  });

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

      <Controller
        name="username"
        control={control}
        rules={{required: 'O username é obrigário'}}
        render={({field, fieldState}) => (
          <Input
            value={field.value}
            onChangeText={field.onChange}
            label="Seu username"
            placeholder="@"
            boxProps={{mb: 's20'}}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        name="fullName"
        control={control}
        rules={{required: 'O nome completo é obrigário'}}
        render={({field, fieldState}) => (
          <Input
            value={field.value}
            onChangeText={field.onChange}
            label="Nome completo"
            placeholder="Digite sue nome completo"
            boxProps={{mb: 's20'}}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        rules={{required: 'O email é obrigário'}}
        render={({field, fieldState}) => (
          <Input
            value={field.value}
            onChangeText={field.onChange}
            label="E-mail"
            placeholder="seu@email.com"
            boxProps={{mb: 's20'}}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{required: 'A senha é obrigária'}}
        render={({field, fieldState}) => (
          <PasswordInput
            value={field.value}
            onChangeText={field.onChange}
            label="Sua Senha"
            placeholder="Digite sua senha"
            boxProps={{mb: 's20'}}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Button
        disabled={!formState.isValid}
        title="Entrar"
        onPress={handleSubmit(handleCreateAccount)}
      />
    </Screen>
  );
};
