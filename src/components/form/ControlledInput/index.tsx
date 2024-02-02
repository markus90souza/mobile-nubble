import { Input, InputProps } from '@components/index'
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'

export function ControlledInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...rest
}: InputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <Input
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
  )
}
