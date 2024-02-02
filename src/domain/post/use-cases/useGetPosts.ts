import { usePaginateList } from '@domain/hooks/usePaginateList'

import { postService } from '../post.service'
import { Post } from '../post.types'

export const useGetPosts = () => {
  return usePaginateList<Post>(postService.getPosts)
}
