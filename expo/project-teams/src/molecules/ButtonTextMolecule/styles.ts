import { CaretLeft } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

export const StyledContainer = styled(CaretLeft).attrs(
  ({ theme, ...props }) => ({
    color: theme.variant.white,
    size: 36
  })
)`
  ${({ theme, ...props }) => css``}
`;
