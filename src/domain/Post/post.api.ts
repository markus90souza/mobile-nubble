import { api } from '@api/api'
import { PageAPI } from '@api/api.types'

import { PostAPI } from './post.types'

type PostData = PageAPI<PostAPI>

const getPosts = async (): Promise<PostData> => {
  const { data } = await api<PostData>('user/post')
  return data
}

export const postApi = {
  getPosts,
}
