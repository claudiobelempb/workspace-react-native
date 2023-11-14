import { typeDefault } from '@typesDefault/typesDefault';
import { HeadingContainer } from './styles';

export function HeadingAton({ ...props }: typeDefault) {
  return <HeadingContainer {...props}>{props.children}</HeadingContainer>;
}
