import { BoxAtoms } from '@atoms/BoxAtoms';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { LoadingAtoms } from '@atoms/LoadingAtoms';
import { useHistoriFindAllService } from '@hooks/history/useHistoryFindAll.service';
import { HeaderMolecules } from '@molecules/HeaderMolecules';
import { SectionListHistoryMolecules } from '@molecules/SectionListHistoryMolecules';
import { useFocusEffect } from '@react-navigation/native';
import { AppError } from '@utils/AppError';
import { useCallback, useState } from 'react';
import Toast from 'react-native-toast-message';
import { SectionHistoryDTO } from 'src/dtos/HistoryDTO';

export function HistoryOrganisms() {
  const [history, setHystory] = useState<SectionHistoryDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fechtHistoryFindById() {
    try {
      setIsLoading(true);
      const response = await useHistoriFindAllService();
      setHystory(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const msg = isAppError
        ? error.message
        : 'Não foi possível carregar o històrico.';
      Toast.show({
        text1: msg,
        type: 'error',
        position: 'top'
      });
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fechtHistoryFindById();
    }, [])
  );

  return (
    <ContainerAtoms $bg={{ $background: 'gray_700' }} $flex={{ $flex: 1 }}>
      <HeaderMolecules title='Histórico de Exercícios' />
      <ContentAtoms
        $space={{ $p: 'm24' }}
        $bg={{ $background: 'gray_700' }}
        $flex={{ $flex: 1 }}
      >
        <BoxAtoms
          $bg={{ $background: 'gray_700' }}
          $flex={{ $flex: 1, $justifyContent: 'center' }}
        >
          {isLoading ? (
            <LoadingAtoms $bg={{ $background: 'transparent' }} size={'large'} />
          ) : (
            <SectionListHistoryMolecules sections={history} />
          )}
        </BoxAtoms>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
