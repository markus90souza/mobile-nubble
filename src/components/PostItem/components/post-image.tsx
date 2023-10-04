import { FC } from 'react'
import { Dimensions, Image, StyleProp, ViewStyle } from 'react-native'

import { Post } from '@domain/Post'

type Props = Pick<Post, 'imageURL'>

export const PostImage: FC<Props> = ({ imageURL }) => {
  return (
    <Image
      source={{ uri: imageURL }}
      resizeMode="cover"
      alt=""
      style={{
        width: Dimensions.get('screen').width,
        height: 300,
        marginHorizontal: -24,
      }}
    />
  )
}
