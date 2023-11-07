import InconTurma from '@assets/Icons.png';
import { ImageAtom } from '@atoms/ImageAton';
import { TextAton } from '@atoms/TextAtom';
import { StyledContainer } from './styles';

export function CardTurmaMolecule() {
  return (
    <StyledContainer>
      <ImageAtom source={InconTurma} width={32} height={32} />
      <TextAton variant='#FFFFFF'>Nome da turma</TextAton>
    </StyledContainer>
  );
}
