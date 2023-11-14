import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.View<typeDefault>`
  ${({ theme, ...props }) => css`
    width: 100%;
    background-color: ${props.variantBackgroud
      ? theme.variant[props.variantBackgroud]
      : theme.variant.transparent};
    ${props.isIcon &&
    css`
      justify-content: ${props.justifyContent
        ? props.justifyContent
        : 'space-between'};
    `}
  `}
`;
