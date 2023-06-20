import {ButtonVariant, buttonVariants} from './types';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  variant?: ButtonVariant;
  disabled?: boolean;
}

import {Text} from './../Text';

import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box';

import {Loader} from '../Loader';

export const Button = ({
  title,
  loading,
  variant = 'primary',
  disabled,
  ...rest
}: ButtonProps) => {
  const variants = buttonVariants[variant][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      height={48}
      {...variants.container}
      {...rest}>
      {loading ? (
        <Loader color={variants.content} />
      ) : (
        <Text bold preset="paragraphMedium" color={variants.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
};
