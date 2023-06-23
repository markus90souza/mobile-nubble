import React, {FC, ReactNode} from 'react';

import {Box, Icon, Text} from '..';
import {useAppSafeArea} from '@hooks/useAppSafeArea';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {ScrollContainer, ViewContainer} from './components/Container';
import {useAppTheme} from '@hooks/useAppTheme';

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
            <Box mb="s24" flexDirection="row" alignItems="center">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
};
