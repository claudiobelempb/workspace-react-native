import { TextInputProps } from 'react-native';

import { ErroTextAtoms } from '@atoms/ErroTextAtoms';
import { typeDefault } from '@typesDefault/typesDefault';
import { useTheme } from 'styled-components';
import { Container } from './styles';

type Props = TextInputProps & typeDefault;

export function TextInputAtoms({ ...props }: Props) {
  const { color } = useTheme();
  return (
    <>
      <Container
        placeholder={props.placeholder}
        placeholderTextColor={color[props.$color?.$placeholder || 'gray_100']}
        {...props}
      />
      {props.$validation?.$valid && (
        <ErroTextAtoms $validation={props.$validation}>
          {props.$validation.$message}
        </ErroTextAtoms>
      )}
    </>
  );
}
