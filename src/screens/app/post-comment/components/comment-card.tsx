import { FC } from 'react'

import { Avatar } from '@components/avatar'
import { Box, Text } from '@components/index'
import { PostComment } from '@domain/post-comment'

import { formatRelative } from '../../../../utils'

type Props = {
  comments: PostComment
}

export const CommentCard: FC<Props> = ({ comments }) => {
  return (
    <Box flexDirection="row" alignItems="center" gap="s12" marginBottom="s16">
      <Avatar imageURL={comments.author.profileURL} />

      <Box flex={1}>
        <Text preset="paragraphMedium" bold>
          {comments.author.userName}
        </Text>
        <Text preset="paragraphMedium" color="gray1">
          {comments.message} - {formatRelative(comments.created_at)}
        </Text>
      </Box>
    </Box>
  )
}
