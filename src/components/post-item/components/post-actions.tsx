import { FC } from 'react'

import {
  Box,
  Icon,
  IconProps,
  Text,
  TouchableOpacityBox,
} from '@components/index'
import { Post } from '@domain/post'

type PostIconProps = {
  isActive?: boolean
  icon: {
    default: IconProps['name']
    isActive: IconProps['name']
  }
  onPress: () => void
  name: number
}

const PostIcon: FC<PostIconProps> = ({ icon, isActive, name, onPress }) => {
  return (
    <TouchableOpacityBox
      mr="s24"
      onPress={onPress}
      flexDirection="row"
      alignItems="center"
    >
      <Icon
        color={isActive ? 'isActive' : undefined}
        name={isActive ? icon.isActive : icon.default}
      />

      <Text bold preset="paragraphSmall" ml="s8">
        {name > 0 ? name : 0}
      </Text>
    </TouchableOpacityBox>
  )
}

type Props = Pick<Post, 'commentCount' | 'favoriteCount' | 'reactionCount'>

export const PostActions: FC<Props> = ({
  commentCount,
  favoriteCount,
  reactionCount,
}) => {
  const handleLiked = () => {
    //
  }

  const handleNavigateToComments = () => {
    //
  }

  const handlePost = () => {
    //
  }
  return (
    <Box flexDirection="row" mt="s16">
      <PostIcon
        isActive
        icon={{ default: 'heart', isActive: 'heartFill' }}
        name={reactionCount}
        onPress={handleLiked}
      />

      <PostIcon
        icon={{ default: 'comment', isActive: 'comment' }}
        name={commentCount}
        onPress={handleNavigateToComments}
      />

      <PostIcon
        icon={{ default: 'bookmark', isActive: 'bookmarkFill' }}
        name={favoriteCount}
        onPress={handlePost}
      />
    </Box>
  )
}
