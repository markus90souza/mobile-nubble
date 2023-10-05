import { PostAdapter } from './post.adapters'
import { postApi } from './post.api'
import { Post } from './post.types'

async function getPosts(): Promise<Post[]> {
  const { data } = await postApi.getPosts()
  return data.map((post) => PostAdapter.toPost(post))
}

export const postService = {
  getPosts,
}
