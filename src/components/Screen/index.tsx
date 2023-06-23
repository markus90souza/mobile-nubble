import React, {FC, ReactNode} from 'react';

import {Box, Icon, Text} from '..';
import {useAppSafeArea} from '@hooks/useAppSafeArea';

interface ScreenProps {
  children: ReactNode;
  canGoBack?: boolean;
}

export const Screen: FC<ScreenProps> = ({children, canGoBack = false}) => {
  const {top} = useAppSafeArea();

  return (
    <Box paddingHorizontal="s24" style={{paddingTop: top}}>
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
  );
};
