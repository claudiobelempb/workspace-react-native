import { ReactNode } from 'react';
import { StyledContainer } from './styles';

type Prpops = {
  children: ReactNode;
};
export function SectionTemplate({ children }: Prpops) {
  return <StyledContainer>{children}</StyledContainer>;
}
