import { FC } from 'react'

import { Text, Loader, Box, Button } from '@components/index'

type Props = {
  loading: boolean
  error: unknown
  refetch: () => void
}

export const HomeEmpty: FC<Props> = ({ error, loading, refetch }) => {
  let component = (
    <Text bold preset="paragraphMedium">
      Não há publicações no seu feed
    </Text>
  )
  if (error) {
    component = (
      <>
        <Text bold preset="paragraphMedium" mb="s16">
          Não foi possivel carregar o feed
        </Text>

        <Button onPress={refetch} title="Recarregar" variant="outline" />
      </>
    )
  }

  if (loading) {
    component = (
      <Box>
        <Loader color={'primary'} />
      </Box>
    )
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  )
}
