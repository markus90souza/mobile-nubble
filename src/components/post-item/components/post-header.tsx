import { FC } from 'react'

import { Avatar } from '@components/avatar'
import { Box, Text } from '@components/index'
import { Post } from '@domain/post'

type Props = Pick<Post, 'author'>

export const PostHeader: FC<Props> = ({ author }) => {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <Avatar imageURL={author.profileURL} />
      <Text ml="s12" semiBold preset="paragraphMedium">
        {author.userName}
      </Text>
    </Box>
  )
}
