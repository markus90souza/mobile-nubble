import { FC } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Box } from '@components/index'
import { Screen } from '@components/screen'
import { useGetPostComments } from '@domain/post-comment/use-cases'
import { useAppSafeArea } from '@hooks/useAppSafeArea'

import { AppScreenProps } from '../../../types/navigation'

import { ReadMore, CommentCard, PostCommentMessageInput } from './components'

export const PostComment: FC<AppScreenProps<'postComment'>> = ({ route }) => {
  const { postId } = route.params

  const {
    list: comments,
    nextPage,
    hasNextPage,
    refresh,
  } = useGetPostComments(postId)

  const { bottom } = useAppSafeArea()

  return (
    <Screen flex={1} canGoBack title="Comentários">
      <Box flex={1}>
        <FlatList
          data={comments}
          renderItem={({ item }) => <CommentCard comments={item} />}
          contentContainerStyle={{ paddingBottom: bottom }}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            hasNextPage ? <ReadMore onPress={nextPage} /> : null
          }
        />

        <PostCommentMessageInput postId={postId} onCommentCreate={refresh} />
      </Box>
    </Screen>
  )
}
