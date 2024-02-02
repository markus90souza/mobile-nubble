import { useEffect, useState } from 'react'

import { Page } from './../../types/page'

export function usePaginateList<Data>(
  getList: (page: number) => Promise<Page<Data>>,
) {
  const [list, setList] = useState<Data[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<boolean | null>(null)
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(true)

  const getInitialData = async () => {
    try {
      setErro(null)
      setLoading(true)
      const { data, meta } = await getList(1)
      setList(data)

      console.log(data)

      if (meta.hasNextPage) {
        setPage(2)
      } else {
        setHasNextPage(false)
      }
    } catch (e) {
      setErro(true)
    } finally {
      setLoading(false)
    }
  }

  const nextPage = async () => {
    if (loading || !hasNextPage) return

    try {
      setLoading(true)
      const { data, meta } = await getList(page)

      setList((prev) => [...prev, ...data])

      if (meta.hasNextPage) {
        setPage((prev) => prev + 1)
      } else {
        setHasNextPage(false)
      }
    } catch (error) {
      setErro(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getInitialData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    erro,
    loading,
    list,
    refresh: getInitialData,
    nextPage,
    hasNextPage,
  }
}
