import { apiAdapter } from '@api/api.adapter'

import { Page } from '../../types/page'

import { PostAdapter } from './post.adapters'
import { postApi } from './post.api'
import { Post } from './post.types'

type Props = Page<Post>

const PER_PAGE = 5

async function getPosts(page: number): Promise<Props> {
  const postData = await postApi.getPosts({ page, per_page: PER_PAGE })
  return {
    data: postData.data.map(PostAdapter.toPost),
    meta: apiAdapter.toMetadataPage(postData.meta),
  }
}

export const postService = {
  getPosts,
}
