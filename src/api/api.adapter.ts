import { MetaDataPage } from '../types/page'

import { MetaDataPageAPI } from './api.types'

const toMetadataPage = (meta: MetaDataPageAPI): MetaDataPage => {
  return {
    total: meta.total,
    currentPage: meta.current_page,
    firstPage: meta.first_page,
    hasNextPage: !!meta.next_page_url,
    hasPreviousPage: !!meta.previous_page_url,
    lastPage: meta.last_page,
    perPage: meta.per_page,
  }
}

export const apiAdapter = { toMetadataPage }
