import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.View`
  ${({ theme, ...props }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.COLORS.GRAY_600};
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
