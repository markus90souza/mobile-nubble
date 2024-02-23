import React, { FC, useState } from 'react'

import { MessageInput } from '@components/message-input'
// import { usePostCommentCreate } from '@domain/post-comment/use-cases'

type Props = {
  postId: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PostCommentMessageInput: FC<Props> = ({ postId }) => {
  const [message, setMessage] = useState('')
  // const { createComment } = usePostCommentCreate(postId)

  const handleCreateComment = async () => {
    // await createComment(message)
  }

  return (
    <MessageInput
      placeholder="Adicione um comentário"
      value={message}
      onChangeText={setMessage}
      onSendMessage={handleCreateComment}
    />
  )
}
