import { typeDefault } from '@typesDefault/typesDefault';
import { ActivityIndicatorProps } from 'react-native';
import { StyledContainer, StyledLoading } from './styles';

type Props = {} & ActivityIndicatorProps & typeDefault;

export const LoadingAtoms = ({ ...props }: Props) => {
  return (
    <StyledContainer {...props}>
      <StyledLoading size={props.size} />
    </StyledContainer>
  );
};
