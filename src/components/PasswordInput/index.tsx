import React, { FC, useState } from 'react'

import { Icon, Input, InputProps } from '@components/index'

export type PasswordInputProps = Omit<InputProps, 'RightComponent'>

export const PasswordInput: FC<PasswordInputProps> = ({ ...rest }) => {
  const [isSecurityTextEntry, setisSecurityTextEntry] = useState(false)

  const toggleSecurityTextEntry = () => {
    setisSecurityTextEntry((prev) => !prev)
  }
  return (
    <Input
      secureTextEntry={isSecurityTextEntry}
      RightComponent={
        <Icon
          onPress={toggleSecurityTextEntry}
          color="gray2"
          name={isSecurityTextEntry ? 'eyeOn' : 'eyeOff'}
        />
      }
      {...rest}
    />
  )
}
