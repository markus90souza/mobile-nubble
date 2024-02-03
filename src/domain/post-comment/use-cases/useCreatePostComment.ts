import { useState } from 'react'

import { postCommentService } from '../post-comments.service'
import { PostComment } from '../post-comments.types'

type Options = {
  onSuccess?: (data: PostComment) => void
}

export const useCreatePostComment = (postId: number, options?: Options) => {
  const [isloading, setIsloading] = useState(true)

  const [error, setError] = useState<boolean | null>(null)
  const createComment = async (message: string) => {
    try {
      setIsloading(true)

      const postCreated = await postCommentService.createComment(
        postId,
        message,
      )

      if (options?.onSuccess) {
        options.onSuccess(postCreated)
      }
    } catch (e) {
      setError(true)
    } finally {
      setIsloading(false)
    }
  }

  return { createComment, isloading, error }
}
