import { apiAdapter } from '@api/api.adapter'
import {
  PostComment,
  PostCommentAdapter,
  postCommentAPI,
} from '@domain/post-comment'

import { Page } from '../../types/page'

type Props = Page<PostComment>

const PER_PAGE = 5

const getComments = async (postId: number, page: number): Promise<Props> => {
  const postCommentData = await postCommentAPI.getComments(postId, {
    page,
    per_page: PER_PAGE,
  })
  return {
    data: postCommentData.data.map(PostCommentAdapter.toPostComment),
    meta: apiAdapter.toMetadataPage(postCommentData.meta),
  }
}

const createComment = async (
  postId: number,
  message: string,
): Promise<PostComment> => {
  const data = await postCommentAPI.createComment(postId, message)

  return PostCommentAdapter.toPostComment(data)
}

export const postCommentService = {
  getComments,
  createComment,
}
