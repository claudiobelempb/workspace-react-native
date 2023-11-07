import { StyledContainer, StyledText } from './styles';

type Props = {
  onPress: () => void;
  title: string;
  variant?: string;
};

export function ButtonTouchableOpacityAton({
  onPress,
  title,
  variant = '#31CF67'
}: Props) {
  return (
    <>
      <StyledContainer onPress={onPress}>
        <StyledText>{title}</StyledText>
      </StyledContainer>
    </>
  );
}
