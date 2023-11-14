import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { StyledContainer } from './styles';

export function FlatListAtom({ ...props }: typeDefault) {
  return (
    <BoxTemplate>
      <StyledContainer
        {...props}
        data={props.data}
        renderItem={props.renderItem}
        showsVerticalScrollIndicator={false}
      />
    </BoxTemplate>
  );
}
