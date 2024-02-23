import React from 'react'
import { RefreshControl, ScrollView } from 'react-native'

import { Loader, Box, Avatar, Screen, Text } from '@components/index'
import { useUserGetById } from '@domain/user'

import { AppScreenProps } from '../../../types/navigation'

export function Profile({ route }: AppScreenProps<'profile'>) {
  const userId = route.params.userId

  const { isLoading, isError, user, isRefetching, refetch } =
    useUserGetById(userId)

  return (
    <Screen canGoBack flex={1}>
      {isLoading && <Loader />}
      {isError && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <ScrollView
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
          }
        >
          <Box alignItems="center">
            <Avatar imageURL={user.profileUrl} size={64} borderRadius={24} />
            <Text preset="headingMedium" bold>
              {user.fullName}
            </Text>
            <Text>@{user.username}</Text>
          </Box>
        </ScrollView>
      )}
    </Screen>
  )
}
