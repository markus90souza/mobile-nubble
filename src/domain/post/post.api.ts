/* eslint-disable camelcase */
import { api, PageAPI, PageParams } from '@api/index'

import { PostAPI } from './post.types'

type PostData = PageAPI<PostAPI>

const getPosts = async ({ page, per_page }: PageParams): Promise<PostData> => {
  const { data } = await api<PostData>('user/post', {
    params: {
      page,
      per_page,
    },
  })

  return data
}

export const postApi = {
  getPosts,
}
