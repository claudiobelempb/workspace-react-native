import { TextInputProps } from 'react-native';

import { typeDefault } from '@typesDefault/typesDefault';
import { TextInputAtomContainer } from './styles';

type Props = TextInputProps & typeDefault;

export function TextInputAtoms({ ...props }: Props) {
  return <TextInputAtomContainer {...props} />;
}
