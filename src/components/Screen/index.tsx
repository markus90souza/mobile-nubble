import React, {FC, ReactNode} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {Box, Icon, Text, TouchableOpacityBox} from '..';
import {useAppSafeArea} from '@hooks/useAppSafeArea';

import {ScrollContainer, ViewContainer} from './components/Container';
import {useAppTheme} from '@hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';

interface ScreenProps {
  children: ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export const Screen: FC<ScreenProps> = ({
  children,
  canGoBack = false,
  scrollable = false,
}) => {
  const {top, bottom} = useAppSafeArea();

  const {colors} = useAppTheme();
  const Container = scrollable ? ScrollContainer : ViewContainer;

  const {goBack} = useNavigation();

  const handleGoBack = () => {
    goBack();
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS == 'android' ? undefined : 'padding'}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingBottom="s24"
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
          {canGoBack && (
            <TouchableOpacityBox
              mb="s24"
              flexDirection="row"
              alignItems="center"
              onPress={handleGoBack}>
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
};
