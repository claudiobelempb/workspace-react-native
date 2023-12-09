import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components/native';

export const StyledSeparationVerticalText = styled.Text<typeDefault>`
  ${({ theme, ...props }) => css`
    background-color: ${props.variantBackgroud
      ? theme.variant[props.variantBackgroud]
      : theme.variant.gray_300};
    height: 14px;
    width: 1px;
  `}
`;
