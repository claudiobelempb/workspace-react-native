import { ReactNode } from 'react';
import { TextContainer } from './styles';

type Props = {
  children: ReactNode;
  variant?: string;
  aling?: 'left' | 'auto' | 'center' | 'right' | 'justify';
};

const color = ['#6B6B6B', '#FFFFFF'];

export function TextAton({
  children,
  variant = '#6B6B6B',
  aling = 'left'
}: Props) {
  return (
    <TextContainer variant={variant} aling={aling}>
      {children}
    </TextContainer>
  );
}
