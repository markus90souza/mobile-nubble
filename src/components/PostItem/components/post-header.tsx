import { FC } from 'react'
import { Image } from 'react-native'

import { Box, Text } from '@components/index'
import { Post } from '@domain/Post'

type Props = Pick<Post, 'author'>

export const PostHeader: FC<Props> = ({ author }) => {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <Image
        source={{ uri: author.profileURL }}
        alt=""
        style={{
          width: 32,
          height: 32,
          borderRadius: 16,
        }}
      />

      <Text ml="s12" semiBold preset="paragraphMedium">
        {author.userName}
      </Text>
    </Box>
  )
}
