import { FC } from 'react'
import { Dimensions, Image } from 'react-native'

import { Post } from '@domain/post'

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
