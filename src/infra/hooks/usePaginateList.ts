import { useEffect, useState } from 'react'

import { useInfiniteQuery } from '@tanstack/react-query'

import { Page } from '@/types/page'

interface UsePaginateListResult<TData> {
  list: TData[]
  isError: boolean | null
  isLoading: boolean
  refresh: () => void
  nextPage: () => void
  hasNextPage: boolean
}

export function usePaginateList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>,
): UsePaginateListResult<Data> {
  const [list, setList] = useState<Data[]>([])

  const { data, isError, isLoading, hasNextPage, fetchNextPage, refetch } =
    useInfiniteQuery({
      queryKey,
      queryFn: ({ pageParam }) => getList(pageParam),
      initialPageParam: 1,
      getNextPageParam: ({ meta }) =>
        meta.hasNextPage ? meta.currentPage + 1 : null,
    })

  useEffect(() => {
    if (data) {
      const newList = data.pages.reduce<Data[]>((prev, current) => {
        return [...prev, ...current.data]
      }, [])

      setList(newList)
    }
  }, [data])

  return {
    isError,
    isLoading,
    list,
    refresh: refetch,
    nextPage: fetchNextPage,
    hasNextPage,
  }
}
