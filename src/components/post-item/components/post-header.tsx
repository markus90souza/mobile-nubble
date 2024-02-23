import { FC } from 'react'
import { Pressable } from 'react-native'

import { Avatar } from '@components/avatar'
import { Box, Text } from '@components/index'
import { Post } from '@domain/post'
import { useNavigation } from '@react-navigation/native'

type Props = Pick<Post, 'author'>

export const PostHeader: FC<Props> = ({ author }) => {
  const navigation = useNavigation()

  function navigateTpProfile() {
    navigation.navigate('profile', { userId: author.id })
  }
  return (
    <Pressable onPress={navigateTpProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <Avatar imageURL={author.profileURL} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  )
}
