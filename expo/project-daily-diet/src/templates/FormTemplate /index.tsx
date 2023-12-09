import { ReactNode } from 'react';
import { StyledContainer } from './styles';

type Prpops = {
  children: ReactNode;
};
export function FormTemplate({ children }: Prpops) {
  return <StyledContainer>{children}</StyledContainer>;
}
