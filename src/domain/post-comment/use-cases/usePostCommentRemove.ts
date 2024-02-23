import { MutationOptions, QueryKeys } from '@infra/infra.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { postCommentService } from './../post-comment.service'

export function usePostCommentRemove(
  postId: number,
  options?: MutationOptions<string>,
) {
  const queryClient = useQueryClient()

  const { mutate } = useMutation<string, unknown, { postCommentId: number }>({
    mutationFn: ({ postCommentId }) => postCommentService.remove(postCommentId),
    onSuccess: (message) => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      })
      if (options?.onSuccess) {
        options.onSuccess(message)
      }
    },
    onError: () => {
      if (options?.onError) {
        options?.onError(options.errorMessage || 'mensagem genérica')
      }
    },
  })

  return {
    mutate,
  }
}
