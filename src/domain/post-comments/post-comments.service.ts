import { apiAdapter } from '@api/api.adapter'
import {
  PostComment,
  PostCommentAdapter,
  postCommentAPI,
} from '@domain/post-comments'

import { Page } from '../../types/page'

type Props = Page<PostComment>
const PER_PAGE = 5

async function getComments(postId: number, page: number): Promise<Props> {
  const postCommentData = await postCommentAPI.getComments(postId, {
    page,
    per_page: PER_PAGE,
  })
  return {
    data: postCommentData.data.map(PostCommentAdapter.toPostComment),
    meta: apiAdapter.toMetadataPage(postCommentData.meta),
  }
}

export const postCommentService = {
  getComments,
}
