import { useState } from 'react'

import { postCommentService } from '../post-comments.service'

export const useCreatePostComment = (postId: number) => {
  const [isloading, setIsloading] = useState(true)

  const [error, setError] = useState<boolean | null>(null)
  const createComment = async (message: string) => {
    try {
      setIsloading(true)
      return await postCommentService.createComment(postId, message)
    } catch (e) {
      setError(true)
    } finally {
      setIsloading(false)
    }
  }

  return { createComment, isloading, error }
}
