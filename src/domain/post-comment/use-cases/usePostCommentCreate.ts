import { QueryKeys, MutationOptions } from '@infra/infra.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { postCommentService } from '../post-comment.service'
import { PostComment } from '../post-comment.types'

type Props = {
  postId: number
  options?: MutationOptions<PostComment>
}

export const usePostCommentCreate = ({ postId, options }: Props) => {
  const queryClient = useQueryClient()
  const { mutate, isError } = useMutation<
    PostComment,
    unknown,
    { message: string }
  >({
    mutationFn: ({ message }) =>
      postCommentService.createComment(postId, message),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      })
      if (options?.onSuccess) {
        options.onSuccess(data)
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage || 'ocorreu um erro')
      }
    },
  })

  const createComment = async (message: string) => {
    mutate({ message })
  }
  return { createComment, isError }
}
