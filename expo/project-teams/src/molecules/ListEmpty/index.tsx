import { TextAton } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';

export function ListEmpty({ ...props }: typeDefault) {
  return (
    <BoxTemplate
      flex={1}
      direction='row'
      justifyContent='center'
      alingItems='center'
    >
      <TextAton variantColor={props.variantColor} textAlign='center'>
        {props.mensagem}
      </TextAton>
    </BoxTemplate>
  );
}
