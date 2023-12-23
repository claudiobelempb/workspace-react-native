import { ActivityIndicatorProps } from 'react-native';
import { StyledContainer, StyledLoading } from './styles';

type Props = {} & ActivityIndicatorProps;

export const LoadingAtoms = ({ ...props }: Props) => {
  return (
    <StyledContainer>
      <StyledLoading size={props.size} />
    </StyledContainer>
  );
};
