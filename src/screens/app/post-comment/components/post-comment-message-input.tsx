import React, { FC, useState } from 'react'
import { Keyboard } from 'react-native'

import { MessageInput } from '@components/message-input'
import { useCreatePostComment } from '@domain/post-comment/use-cases'

type Props = {
  postId: number
  onCommentCreate: () => void
}

export const PostCommentMessageInput: FC<Props> = ({
  postId,
  onCommentCreate,
}) => {
  const [message, setMessage] = useState('')
  const { createComment } = useCreatePostComment(postId, {
    onSuccess: () => {
      setMessage('')
      onCommentCreate()
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
