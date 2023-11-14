import { CardTurmaMolecule } from '@molecules/CardTurmaMolecule';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { StyledContainer } from './styles';

export function CardTurmaOrganism({ ...props }: typeDefault) {
  return (
    <StyledContainer
      {...props}
      data={[2, 3]}
      renderItem={item => (
        <ContentTemplate>
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
        </ContentTemplate>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}
