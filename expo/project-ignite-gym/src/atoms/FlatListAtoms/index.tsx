import { typeDefault } from '@typesDefault/typesDefault';
import { StyledContainer } from './styles';

export function FlatListAtoms({ ...props }: typeDefault) {
  return (
    <>
      <StyledContainer
        {...props}
        data={props.data}
        renderItem={props.renderItem}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}
