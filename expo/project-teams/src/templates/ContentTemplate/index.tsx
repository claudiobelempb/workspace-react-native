import { ReactNode } from 'react';
import { Container } from './styles';

type Prpops = {
  children: ReactNode;
};
export function ContentTemplate({ children }: Prpops) {
  return <Container>{children}</Container>;
}
