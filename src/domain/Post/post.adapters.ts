import { Post, PostAPI } from './post.types'

const toPost = (postAPI: PostAPI): Post => {
  return {
    id: postAPI.id.toString(),
    text: postAPI.text,
    author: {
      name: postAPI.user.full_name,
      profileURL: postAPI.user.profile_url,
      userName: postAPI.user.username,
    },
    imageURL: postAPI.image_url,
    commentCount: Number(postAPI.meta.comments_count),
    favoriteCount: Number(postAPI.meta.favorite_count),
    reactionCount: Number(postAPI.meta.like_count),
  }
}

export const PostAdapter = { toPost }
