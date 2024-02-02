import { usePaginateList } from '@domain/hooks/usePaginateList'

import { postCommentService } from '../post-comments.service'

export const useGetPostComments = (postId: number) => {
  const getPostComments = (page: number) => {
    return postCommentService.getComments(postId, page)
  }

  return usePaginateList(getPostComments)
}
