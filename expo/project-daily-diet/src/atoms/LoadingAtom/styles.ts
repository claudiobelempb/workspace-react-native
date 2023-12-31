import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.View`
  ${({ theme, ...props }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.variant.gray_100};
  `}
`;

export const StyledLoading = styled.ActivityIndicator.attrs(
  ({ theme, ...props }) => ({
    color: theme.variant.green_700,
    size: props.size
  })
)`
  ${({ theme, ...props }) => css``}
`;
