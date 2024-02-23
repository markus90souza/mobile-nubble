import { FC } from 'react'

import { Box, Icon, Text } from '..'

import { $boxStyles } from './styles'

export const Toast: FC = () => {
  return (
    <Box top={100} {...$boxStyles}>
      <Icon name="checkRound" color="success" />
      <Text style={{ flexShrink: 1 }} preset="paragraphMedium" bold>
        Comentário deletado
      </Text>
    </Box>
  )
}
