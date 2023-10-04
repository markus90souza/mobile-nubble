import { FC } from 'react'

import { Box, Text } from '@components/index'
import { Post } from '@domain/Post'

type Props = Pick<Post, 'author' | 'text' | 'commentCount'>

export const PostFooter: FC<Props> = ({ author, text, commentCount }) => {
  const getComments = (comment: number): string | null => {
    if (comment === 0) {
      return null
    } else if (comment === 1) {
      return 'Ver comentário'
    } else {
      return ` Ver ${comment} comentários`
    }
  }

  const comments = getComments(commentCount)

  return (
    <Box marginTop="s16">
      <Text preset="paragraphMedium" bold>
        {author.name}
      </Text>

      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {comments && (
        <Text mt="s8" preset="paragraphSmall" bold color="primary">
          {comments}
        </Text>
      )}
    </Box>
  )
}
