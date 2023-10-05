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
import { HomeEmpty } from './components/home-empty'
import { HomeHeader } from './components/home-header'

export const Home = ({ navigation }: AppTabScreenProps<'home'>) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<Error | null>(null)
  const fetchdata = async () => {
    try {
      setLoading(true)
      const data = await postService.getPosts()

      setPosts(data)
    } catch (error) {
      console.log('Erro', error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchdata()
  }, [])

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />
  }

  return (
    <Screen style={$screen} flex={1}>
      <FlatList
        contentContainerStyle={{
          flex: posts.length === 0 ? 1 : undefined,
        }}
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty refetch={fetchdata} error={erro} loading={loading} />
        }
      />
    </Screen>
  )
}

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  paddingTop: 0,
}
