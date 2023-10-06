import { api, PageAPI, PageParams } from '@api/index'

import { PostCommentAPI } from './post-comments.types'

type PostData = PageAPI<PostCommentAPI>

const getComments = async (
  postId: number,
  pageParams?: PageParams,
): Promise<PostData> => {
  const { data } = await api<PostData>('user/post_comment', {
    params: {
      postId,
      ...pageParams,
    },
  })
  return data
}

export const postCommentAPI = {
  getComments,
}
