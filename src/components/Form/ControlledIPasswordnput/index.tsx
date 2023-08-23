import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import {PasswordInput, PasswordInputProps} from '@components/PasswordInput';

export function ControlledPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...rest
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field, fieldState}) => (
        <PasswordInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...rest}
          // label="Seu username"
          // placeholder="@"
          // boxProps={{mb: 's20'}}
        />
      )}
    />
  );
}
