import { useEffect, useState } from 'react'
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native'

import { Screen } from '@components/index'
import { PostItem } from '@components/PostItem'
import { Post, postService } from '@domain/Post'

import { AppTabScreenProps } from './../../../types/navigation'
import { HomeHeader } from './components/home-header'

export const Home = ({ navigation }: AppTabScreenProps<'home'>) => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    postService.getList().then((post) => setPosts(post))
  }, [])

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />
  }

  return (
    <Screen style={$screen}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={<HomeHeader />}
      />
    </Screen>
  )
}

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  paddingTop: 0,
}
