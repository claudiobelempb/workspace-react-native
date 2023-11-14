import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.TouchableOpacity`
  ${({ theme, ...props }) => css`
    width: 100%;
    height: 96px;
    flex-direction: row;
    align-items: center;
    column-gap: 16px;
    padding-left: 16px;
    border-radius: 5px;
    background-color: ${theme.variant.gray_400};
    //margin-bottom: 10px;
  `}
`;
