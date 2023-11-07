import styled, { css } from 'styled-components/native';

export const HeadingContainer = styled.Text`
  ${({ theme, ...props }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: bold;
  `}
`;
