import InconTurma from '@assets/Icons.png';
import { TextAton } from '@atoms/TextAtom';
import { ButtonImageMolecule } from '@molecules/ButtonImageMolecule';

export function CardTurmaMolecule() {
  return (
    <ButtonImageMolecule source={InconTurma} width={32} height={32}>
      <TextAton variantBackgroud='white'>Nome da turma</TextAton>
    </ButtonImageMolecule>
  );
}
