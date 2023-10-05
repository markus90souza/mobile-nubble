import { PageAPI } from '@api/api.types'

import { PostAPI } from './post.types'

type PostData = PageAPI<PostAPI>

const getPosts = async (): Promise<PostData> => {
  const response = await fetch('http://localhost:3333/user/post', {
    headers: {
      Authorization:
        'Bearer NA.fBQTJQy0G2Rol6_PHxZ_ivekoH-bLFeq-k58udROjON1DBeHgW2W1WIyIesY',
    },
  })

  const data: PostData = await response.json()

  console.log('Posts', data)

  return data
}

export const postApi = {
  getPosts,
}
