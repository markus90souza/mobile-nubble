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
      style={{ backgroundColor, flex: 1 }}
    >
      {children}
    </ScrollView>
  )
}

export const ViewContainer: FC<Props> = ({ children, backgroundColor }) => {
  return <View style={{ backgroundColor, flex: 1 }}>{children}</View>
}
