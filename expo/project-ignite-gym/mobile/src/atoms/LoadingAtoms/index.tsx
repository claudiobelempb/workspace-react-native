import { typeDefault } from '@typesDefault/typesDefault';
import { ActivityIndicatorProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { StyledContainer, StyledLoading } from './styles';

type Props = {} & ActivityIndicatorProps & typeDefault;

export const LoadingAtoms = ({ ...props }: Props) => {
  const { color } = useTheme();
  return (
    <StyledContainer {...props}>
      <StyledLoading
        size={props.size}
        color={color[props.$color?.$color || 'green_700']}
      />
    </StyledContainer>
  );
};
