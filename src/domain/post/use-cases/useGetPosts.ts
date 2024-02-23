import { usePaginateList } from '@infra/hooks/usePaginateList'
import { QueryKeys } from '@infra/infra.types'

import { postService } from '../post.service'
import { Post } from '../post.types'

export const useGetPosts = () => {
  return usePaginateList<Post>([QueryKeys.PostList], postService.getPosts)
}
