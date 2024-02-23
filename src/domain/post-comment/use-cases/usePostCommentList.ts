import { usePaginateList } from '@infra/hooks/usePaginateList'
import { QueryKeys } from '@infra/infra.types'

import { postCommentService } from '../post-comment.service'

export const usePostCommentList = (postId: number) => {
  const getPostComments = (page: number) => {
    return postCommentService.getComments(postId, page)
  }

  return usePaginateList([QueryKeys.PostCommentList, postId], getPostComments)
}
