import { ReactNode } from 'react';
import { StyledContainer } from './styles';

type Props = {
  children: ReactNode;
};
export function SectionTemplate({ children }: Props) {
  return <StyledContainer>{children}</StyledContainer>;
}
