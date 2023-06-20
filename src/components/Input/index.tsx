import React from 'react';
import {TextInput, TextInputProps, TextStyle} from 'react-native';
import {Box, BoxProps} from '../Box';
import {Text} from '../Text';
import {$fontFamily, $fontSizes} from '../Text/types';
import {useAppTheme} from '../../hooks/useAppTheme';

interface InputProps extends TextInputProps {
  label: string;
}

export function Input({label, ...rest}: InputProps) {
  const {colors} = useAppTheme();
  return (
    <Box>
      <Text mb="s4" preset="paragraphMedium">
        {label}
      </Text>
      <Box {...$boxStyles}>
        <TextInput
          style={$inputStyle}
          placeholderTextColor={colors.gray2}
          {...rest}
        />
      </Box>
    </Box>
  );
}

const $inputStyle: TextStyle = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};

const $boxStyles: BoxProps = {
  borderWidth: 1,
  borderColor: 'gray4',
  padding: 's16',
  borderRadius: 's12',
};
