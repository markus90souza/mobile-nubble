/* eslint-disable camelcase */
import { api, PageAPI, PageParams } from '@api/index'

import { PostCommentAPI } from './post-comment.types'

type PostData = PageAPI<PostCommentAPI>

const PATH = 'user/post_comment'

const list = async (
  post_id: number,
  pageParams?: PageParams,
): Promise<PostData> => {
  const { data } = await api.get<PostData>(PATH, {
    params: {
      post_id,
      ...pageParams,
    },
  })

  return data
}

const create = async (
  post_id: number,
  message: string,
): Promise<PostCommentAPI> => {
  const { data } = await api.post<PostCommentAPI>(PATH, { post_id, message })

  return data
}

const remove = async (postCommentId: number): Promise<{ message: string }> => {
  const { data } = await api.delete<{ message: string }>(
    `${PATH}/${postCommentId}`,
  )

  return data
}

export const postCommentAPI = {
  list,
  create,
  remove,
}
