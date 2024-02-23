export interface PostComment {
  id: string
  message: string
  author: {
    id: number
    profileURL: string
    name: string
    userName: string
  }
  created_at: string
}
// interface de dados vindo da api
export interface PostCommentAPI {
  id: number // 114
  message: string // 'Porro illum occaecati quidem hic.'
  user_id: number // 6
  post_id: number // 1
  created_at: string // '2023-10-03T13:28:50.000-03:00'

  updated_at: string // '2023-10-05T01:59:08.219-03:00'
  user: {
    id: number // 6
    first_name: string // 'Samuel'
    last_name: string // 'Vilar'
    username: string // 'samuelvilar'
    email: string // 'samu.vilar@coffstack.com'
    profile_url: string // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/5-samuel.png'
    is_online: boolean // false
    full_name: string // 'Samuel Vilar'
  }
  post: {
    id: number // 1
    text: string // 'Bom dia!'
    user_id: number // 1
    image_url: string // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post1.jpg'
    is_fixed: boolean // false
    is_activated: boolean // true
    created_at: string // '2023-10-05T01:59:07.447-03:00'
    updated_at: string // '2023-10-05T01:59:07.450-03:00'
    status: string // 'published'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    meta: any // {}
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta: any // {}
}
