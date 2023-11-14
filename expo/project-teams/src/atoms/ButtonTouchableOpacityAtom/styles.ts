import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components/native';

export const TouchableOpacityContainer = styled.TouchableOpacity<typeDefault>`
  ${({ theme, ...props }) => css`
    width: 100%;
    ${props.width &&
    css`
      width: ${props.width}px;
    `}
    ${props.height &&
    css`
      height: ${props.height}px;
    `}
    background-color: ${props.variantBackgroud
      ? theme.variant[props.variantBackgroud]
      : theme.variant.transparent};
    border-radius: 5px;
    ${props.isActive &&
    css`
      border: 1px solid
        ${props.variantBorder
          ? theme.variant[props.variantBorder]
          : theme.variant.green_500};
    `}
  `}
`;
