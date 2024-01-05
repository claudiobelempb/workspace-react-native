import { css } from 'styled-components/native';
type Props = {
  $isFocus: boolean;
};

export const handleOnFocus = () => css`
  border: 1px solid #c0c0c0;
  background-color: red;
  color: yellow;
`;
