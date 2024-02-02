import { FC } from 'react'

import { BrandLogo } from '@brand/brand-logo'
import { Box, Icon } from '@components/index'
import { useAppSafeArea } from '@hooks/useAppSafeArea'

export const HomeHeader: FC = () => {
  const { top } = useAppSafeArea()
  return (
    <Box
      style={{ paddingTop: top }}
      paddingHorizontal="s24"
      paddingBottom="s24"
      flexDirection="row"
      backgroundColor="gray5"
      alignItems="center"
      justifyContent="space-between"
    >
      <BrandLogo />

      <Box flexDirection="row" gap="s24">
        <Icon name="search" />
        <Icon name="bellOn" />
        <Icon name="comment" />
      </Box>
    </Box>
  )
}
