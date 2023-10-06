import { FC } from 'react'

import { Box } from '@components/index'
import { Post } from '@domain/Post'

import { PostActions } from './components/post-actions'
import { PostFooter } from './components/post-footer'
import { PostHeader } from './components/post-header'
import { PostImage } from './components/post-image'

type Props = {
  post: Post
}

export const PostItem: FC<Props> = ({ post }) => {
  const { author, imageURL } = post
  return (
    <Box mb="s24" paddingHorizontal="s24">
      <PostHeader author={author} />

      <PostImage imageURL={imageURL} />

      <PostActions
        reactionCount={post.favoriteCount}
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
      />

      <PostFooter
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
        id={post.id}
      />
    </Box>
  )
}
