import React from 'react'

import {
  Text,
  Loader,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components/index'

// import {TouchableOpacityBox, TouchableOpacityBoxProps} from '@components/Box';

import { ButtonVariant, buttonVariants } from './types'

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string
  loading?: boolean
  variant?: ButtonVariant
  disabled?: boolean
}
export const Button = ({
  title,
  loading,
  variant = 'primary',
  disabled,
  ...rest
}: ButtonProps) => {
  const variants = buttonVariants[variant][disabled ? 'disabled' : 'default']
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      height={48}
      {...variants.container}
      {...rest}
    >
      {loading ? (
        <Loader color={variants.content} />
      ) : (
        <Text bold preset="paragraphMedium" color={variants.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  )
}
