import { ImageProps } from 'react-native';
import styled, { css } from 'styled-components/native';

export const ContainerImage = styled.Image<ImageProps>`
  ${({ theme, ...props }) => css`
    width: ${props.width}px;
    height: ${props.height}px;
  `}
`;
