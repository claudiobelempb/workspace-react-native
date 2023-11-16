import { typeDefault } from '@typesDefault/typesDefault';
import { CaretLeft, IconProps } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

type Props = typeDefault & IconProps;
export const StyledContainer = styled(CaretLeft).attrs<Props>(
  ({ theme, ...props }) => ({
    color: theme.variant.white,
    size: 32,
    weight: 'fill'
  })
)`
  ${({ theme, ...props }) => css``}
`;
