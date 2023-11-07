import styled, { css } from 'styled-components/native';

type Props = {
  variant?: string;
  aling?: 'left' | 'auto' | 'center' | 'right' | 'justify';
};

export const TextContainer = styled.Text<Props>`
  ${({ theme, ...props }) => css`
    color: ${props.variant ? '#6B6B6B' : '#FFFFFF'};
    font-size: 16px;
    text-align: ${props.aling ?? 'center'};
  `}
`;
