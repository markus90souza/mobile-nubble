import React, {FC, ReactElement, useRef} from 'react';
import {Pressable, TextInput, TextInputProps, TextStyle} from 'react-native';
import {Text, Box, BoxProps} from '@components/index';
import {$fontFamily, $fontSizes} from '@components/Text/types';
import {useAppTheme} from '@hooks/useAppTheme';
import {theme} from '@theme/index';

export interface InputProps extends TextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: ReactElement;
  boxProps?: BoxProps;
}

export const Input: FC<InputProps> = ({
  label,
  errorMessage,
  RightComponent,
  boxProps,
  ...rest
}) => {
  const {colors} = useAppTheme();
  const inputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const $boxStyles: BoxProps = {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    padding: 's16',
    borderRadius: 's12',
  };

  return (
    <Box {...boxProps}>
      <Pressable onPress={handleFocus}>
        <Text mb="s4" preset="paragraphMedium">
          {label}
        </Text>
        <Box {...$boxStyles}>
          <TextInput
            ref={inputRef}
            style={$inputStyle}
            placeholderTextColor={colors.gray2}
            autoCapitalize={'none'}
            {...rest}
          />
          {/* Icon */}

          {RightComponent && (
            <Box justifyContent="center" ml="s16">
              {RightComponent}
            </Box>
          )}
        </Box>

        {errorMessage && (
          <Text color="error" preset="paragraphSmall" bold>
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
};

const $inputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
  color: theme.colors.grayBlack,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
