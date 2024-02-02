export interface Post {
  id: number
  text: string
  author: {
    profileURL: string
    name: string
    userName: string
  }
  imageURL: string
  reactionCount: number
  commentCount: number
  favoriteCount: number
}

export interface PostAPI {
  id: number
  text: string
  user_id: number
  image_url: string
  is_fixed: boolean
  is_activated: boolean
  created_at: string // '2023-10-04T19:48:57.605-03:00'
  updated_at: string // '2023-10-04T19:48:57.608-03:00'
  user: {
    id: number
    first_name: string
    last_name: string
    username: string
    email: string
    profile_url: string
    full_name: string
  }
  status: string // 'published'
  meta: {
    like_count: string // '4'
    favorite_count: string // '0'
    comments_count: string // '3'
  }
}
