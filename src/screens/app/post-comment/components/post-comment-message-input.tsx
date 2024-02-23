import React, { FC, useState } from 'react'
import { Keyboard } from 'react-native'

import { MessageInput } from '@components/message-input'
import { usePostCommentCreate } from '@domain/post-comment/use-cases'

type Props = {
  postId: number
}

export const PostCommentMessageInput: FC<Props> = ({ postId }) => {
  const [message, setMessage] = useState('')
  const { createComment } = usePostCommentCreate(postId, {
    onSuccess: (_) => {
      setMessage('')
      Keyboard.dismiss()
    },
  })

  const handleCreateComment = async () => {
    await createComment(message)
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
