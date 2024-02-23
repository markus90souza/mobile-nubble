import { apiAdapter } from '@api/api.adapter'
import {
  PostComment,
  PostCommentAdapter,
  postCommentAPI,
} from '@domain/post-comment'

import { Page } from '@/types/page'

type Props = Page<PostComment>

const PER_PAGE = 10

const getComments = async (postId: number, page: number): Promise<Props> => {
  const postCommentData = await postCommentAPI.list(postId, {
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
  const data = await postCommentAPI.create(postId, message)

  return PostCommentAdapter.toPostComment(data)
}

async function remove(postCommentId: number): Promise<string> {
  const response = await postCommentAPI.remove(postCommentId)
  return response.message
}

export const postCommentService = {
  getComments,
  createComment,
  remove,
}
