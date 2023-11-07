import { HeadingAton } from '@atoms/HeadingAtom';
import { ImageAtom } from '@atoms/ImageAton';
import { TextAton } from '@atoms/TextAtom';
import { SectionTurmaContainer } from './styles';

import ImageGrup from '@assets/Icons.png';

type Props = {
  title: string;
  description: string;
  isIcon: boolean;
};
export function SectionTurmaOrganism({ title, description, isIcon }: Props) {
  return (
    <SectionTurmaContainer>
      {isIcon && <ImageAtom source={ImageGrup} width={56} height={56} />}
      <HeadingAton>{title}</HeadingAton>
      <TextAton>{description}</TextAton>
    </SectionTurmaContainer>
  );
}
