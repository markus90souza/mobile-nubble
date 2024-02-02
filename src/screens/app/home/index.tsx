import { useRef } from 'react'
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native'

import { Screen } from '@components/index'
import { PostItem } from '@components/post-item'
import { Post } from '@domain/post'
import { useGetPosts } from '@domain/post/use-cases/useGetPosts'
import { useScrollToTop } from '@react-navigation/native'

import { AppTabScreenProps } from '../../../types/navigation'

import { HomeEmpty } from './components/home-empty'
import { HomeHeader } from './components/home-header'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Home = ({ navigation }: AppTabScreenProps<'home'>) => {
  const { erro, loading, list: posts, refresh, nextPage } = useGetPosts()

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />
  }

  const homeFlatlistRef = useRef<FlatList<Post>>(null)
  useScrollToTop(homeFlatlistRef)
  return (
    <Screen style={$screen} flex={1}>
      <FlatList
        ref={homeFlatlistRef}
        showsVerticalScrollIndicator={false}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          flex: posts.length === 0 ? 1 : undefined,
        }}
        data={posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        onEndReached={nextPage}
        onEndReachedThreshold={0.1}
        refreshing={loading}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty refetch={refresh} error={erro} loading={loading} />
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
