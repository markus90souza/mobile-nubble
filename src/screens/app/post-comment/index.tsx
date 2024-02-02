import { FC, useState } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Box } from '@components/index'
import { MessageInput } from '@components/message-input'
import { Screen } from '@components/screen'
import { PostComment as IPostComment } from '@domain/post-comment'
import {
  useCreatePostComment,
  useGetPostComments,
} from '@domain/post-comment/use-cases'
import { useAppSafeArea } from '@hooks/useAppSafeArea'

import { AppScreenProps } from '../../../types/navigation'

import { CommentItem } from './components/comment-item'
import { ReadMore } from './components/read-more'

export const PostComment: FC<AppScreenProps<'postComment'>> = ({ route }) => {
  const { postId } = route.params

  const [message, setMessage] = useState('')

  const { list: comments, nextPage, hasNextPage } = useGetPostComments(postId)

  const { createComment } = useCreatePostComment(postId)

  const { bottom } = useAppSafeArea()

  function renderItem({ item }: ListRenderItemInfo<IPostComment>) {
    return <CommentItem comments={item} />
  }

  return (
    <Screen flex={1} canGoBack title="Comentários">
      <Box flex={1}>
        <FlatList
          data={comments}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: bottom }}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            hasNextPage ? <ReadMore onPress={nextPage} /> : null
          }
        />

        <MessageInput
          placeholder="Adicione um comentário"
          value={message}
          onChangeText={setMessage}
          onSendMessage={() => createComment(message)}
        />
      </Box>
    </Screen>
  )
}
