import React, { FC, ReactNode } from 'react'
import { View, ScrollView } from 'react-native'

interface Props {
  children: ReactNode
  backgroundColor: string
}

export const ScrollContainer: FC<Props> = ({ children, backgroundColor }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'handled'}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ backgroundColor, flex: 1 }}
    >
      {children}
    </ScrollView>
  )
}

export const ViewContainer: FC<Props> = ({ children, backgroundColor }) => {
  // eslint-disable-next-line react-native/no-inline-styles
  return <View style={{ backgroundColor, flex: 1 }}>{children}</View>
}
