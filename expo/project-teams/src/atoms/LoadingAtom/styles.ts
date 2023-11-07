import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.View`
  ${({ theme, ...props }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    position: relative;
  `}
`;

export const StyledLoading = styled.ActivityIndicator.attrs(
  ({ theme, ...props }) => ({
    color: theme.COLORS.GREEN_700,
    size: 'large'
  })
)`
  ${({ theme, ...props }) => css``}
`;
