import { FC } from 'react'
import { Image } from 'react-native'

type AvatarProps = {
  imageURL: string
  size?: number
  borderRadius?: number
}

export const Avatar: FC<AvatarProps> = ({
  imageURL,
  size = 32,
  borderRadius = 14,
}) => {
  return (
    <Image
      source={{ uri: imageURL }}
      resizeMode="cover"
      alt=""
      style={{
        width: size,
        height: size,
        borderRadius,
      }}
    />
  )
}
