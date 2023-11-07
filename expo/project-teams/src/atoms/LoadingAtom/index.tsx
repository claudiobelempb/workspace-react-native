import { StyledContainer, StyledLoading } from './styles';

export const LoadingAtom = ({ ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledLoading {...props} />
    </StyledContainer>
  );
};
