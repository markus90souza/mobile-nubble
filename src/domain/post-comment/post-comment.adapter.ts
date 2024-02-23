import { PostComment, PostCommentAPI } from './post-comment.types'

const toPostComment = (postCommentAPI: PostCommentAPI): PostComment => {
  return {
    id: postCommentAPI.id.toString(),
    message: postCommentAPI.message,

    author: {
      id: postCommentAPI.user.id,
      name: postCommentAPI.user.full_name,
      profileURL: postCommentAPI.user.profile_url,
      userName: postCommentAPI.user.username,
    },
    created_at: postCommentAPI.created_at,
  }
}

export const PostCommentAdapter = { toPostComment }
