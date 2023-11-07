import { TextInputProps } from 'react-native';
import { StyledContainer } from './styles';
interface Props extends TextInputProps {}

export function TextInputAtom({ ...props }: Props) {
  return (
    <>
      <StyledContainer {...props} />
    </>
  );
}
