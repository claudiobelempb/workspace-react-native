import { CardTurmaMolecule } from '@molecules/CardTurmaMolecule';
import { StyledContainer } from './styles';

export function CardTurmaOrganism() {
  return (
    <StyledContainer
      data={[2, 3]}
      renderItem={item => (
        <>
          <CardTurmaMolecule />
          <CardTurmaMolecule />
          <CardTurmaMolecule />
          <CardTurmaMolecule />
          <CardTurmaMolecule />
          <CardTurmaMolecule />
          <CardTurmaMolecule />
          <CardTurmaMolecule />
          <CardTurmaMolecule />
          <CardTurmaMolecule />
          <CardTurmaMolecule />
          <CardTurmaMolecule />
          <CardTurmaMolecule />
          <CardTurmaMolecule />
        </>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}
