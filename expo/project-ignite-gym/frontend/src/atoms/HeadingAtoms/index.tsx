import { typeDefault } from '@typesDefault/typesDefault';
import { HeadingContainer } from './styles';

export function HeadingAtoms({ ...props }: typeDefault) {
  return <HeadingContainer {...props}>{props.children}</HeadingContainer>;
}
