import { QueryKeys } from '@infra/infra.types'
import { useQuery } from '@tanstack/react-query'

import { userService } from '../user.service'

export function useUserGetById(id: number) {
  const {
    data: user,
    isError,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getById(id),
    staleTime: 1000 * 30, // 30 seconds
  })

  return {
    user,
    isError,
    isLoading,
    isRefetching,
    refetch,
  }
}
