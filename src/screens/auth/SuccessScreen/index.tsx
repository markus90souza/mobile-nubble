import React from 'react';

import {Button, Icon, Screen, Text} from '@components/index';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export const SuccessScreen = ({route, navigation}: ScreenProps) => {
  const {description, icon, title} = route.params;
  const handleGoBackReset = () => {
    navigation.goBack();
  };
  return (
    <Screen>
      <Icon name={icon.name} color={icon.color} />
      <Text preset="headingLarge" marginTop="s24">
        {title}
      </Text>
      <Text preset="paragraphLarge" marginTop="s16">
        {description}
      </Text>

      <Button
        marginTop="s40"
        title="Voltar ao Inicio"
        onPress={handleGoBackReset}
      />
    </Screen>
  );
};
