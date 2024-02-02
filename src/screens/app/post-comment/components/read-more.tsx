import { FC } from 'react'
import { Pressable, PressableProps } from 'react-native'

import { Text } from '@components/text'

type ReadMoreProps = PressableProps

export const ReadMore: FC<ReadMoreProps> = ({ ...rest }) => {
  return (
    <Pressable {...rest}>
      <Text bold textAlign="center" color="primary">
        Ver Mais
      </Text>
    </Pressable>
  )
}
