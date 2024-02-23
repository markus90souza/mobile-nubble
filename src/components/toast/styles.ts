import { Dimensions } from 'react-native'

import { $shadowProps } from '@theme/index'

import { BoxProps } from '..'
const MAX_WIDTH = Dimensions.get('screen').width * 0.9
export const $boxStyles: BoxProps = {
  alignSelf: 'center',
  alignItems: 'center',
  gap: 's16',
  borderRadius: 's16',
  backgroundColor: 'background',
  position: 'absolute',
  flexDirection: 'row',
  padding: 's16',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
  style: { ...$shadowProps },
}
