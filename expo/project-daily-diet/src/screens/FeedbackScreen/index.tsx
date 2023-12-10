import { FeedbackOrganisms } from '@organisms/FeedbackOrganisms';
import { ContainerTemplate } from '@templates/ContainerTemplate';

export function FeedbackPage() {
  return (
    <ContainerTemplate
      flex={1}
      variantBackgroud='gray_100'
      justifyContent='center'
      alingItems='center'
      space={{ paddingY: 'm24px' }}
    >
      <FeedbackOrganisms />
    </ContainerTemplate>
  );
}
