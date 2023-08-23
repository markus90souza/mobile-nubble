import React, {FC} from 'react';
import {Input, InputProps} from '@components/Input';
import {Controller} from 'react-hook-form';

type ControlledInputProps = InputProps & {
  control: any;
  name: string;
  rules: any;
};

export const ControlledInput: FC<ControlledInputProps> = ({
  control,
  name,
  rules,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field, fieldState}) => (
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
  );
};
