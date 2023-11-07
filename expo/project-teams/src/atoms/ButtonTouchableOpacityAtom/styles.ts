import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.TouchableOpacity`
  ${({ theme, ...props }) => css`
    height: 56px;
    background-color: ${theme.COLORS.GREEN_700};
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  `}
`;

export const StyledText = styled.Text`
  ${({ theme, ...props }) => css`
    font-size: ${theme.FONTS.SIZE.M16};
    color: #ffffff;
    font-weight: bold;
  `}
`;
