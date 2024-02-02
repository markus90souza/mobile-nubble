import { FC, useRef } from 'react'
import { Pressable, TextInput, TextInputProps, TextStyle } from 'react-native'

import { Text, Box } from '@components/index'
import { $fontFamily, $fontSizes } from '@components/text/types'
import { useAppTheme } from '@hooks/useAppTheme'
import { theme } from '@theme/index'

type MessageProps = TextInputProps & {
  onSendMessage: () => void
}

export const MessageInput: FC<MessageProps> = ({
  onSendMessage,
  value,
  ...rest
}) => {
  const inputRef = useRef<TextInput>(null)
  const { colors } = useAppTheme()
  const handleFocus = () => {
    inputRef.current?.focus()
  }

  const isValueDisabled = value?.trim().length === 0

  return (
    <Pressable onPress={handleFocus}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        flexDirection="row"
        borderRadius="s12"
        justifyContent="space-between"
        alignItems="center"
        gap="s8"
      >
        <TextInput
          style={$inputStyle}
          value={value}
          ref={inputRef}
          {...rest}
          placeholderTextColor={colors.gray2}
        />
        <Pressable disabled={isValueDisabled} onPress={onSendMessage}>
          <Text bold color={isValueDisabled ? 'gray2' : 'primary'}>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  )
}

const $inputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
  color: theme.colors.gray2,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
}
