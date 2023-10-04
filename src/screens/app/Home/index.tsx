import { useEffect, useState } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Screen } from '@components/index'
import { PostItem } from '@components/PostItem'
import { Post, postService } from '@domain/Post'

import { AppTabScreenProps } from './../../../types/navigation'

export const Home = ({ navigation }: AppTabScreenProps<'home'>) => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    postService.getList().then((post) => setPosts(post))
  }, [])

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />
  }

  return (
    <Screen>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </Screen>
  )
}
