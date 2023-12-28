import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { TextInputAtom } from '@atoms/TextInputAtom';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { FormTemplates } from '@templates/FromTemplates';
import React from 'react';

export function SignupOrganismis() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleGoBackScreen() {
    navigation.goBack();
  }

  return (
    <FormTemplates>
      <BoxAtoms $flex={{ $rowGap: 16 }}>
        <HeadingAtoms
          $color={{ $color: 'gray_100' }}
          $text={{ $align: 'center' }}
          $space={{ $mt: 'x64' }}
        >
          Crie sua conta
        </HeadingAtoms>
        <TextInputAtom $opacity={0.6} placeholder='Name' />
        <TextInputAtom
          $opacity={0.6}
          placeholder='Email'
          keyboardType='email-address'
        />
        <TextInputAtom $opacity={0.6} placeholder='Senha' />
        <TextInputAtom $opacity={0.6} placeholder='Confirme a Senha' />
        <ButtonTouchableOpacityAton
          $height={{ $height: 56 }}
          $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
          $bg={{ $background: 'green_700' }}
          $border={{
            $r: { width: 8 }
          }}
        >
          <TextAtoms
            $text={{ $align: 'center' }}
            $color={{ $color: 'white' }}
            $font={{ $weigh: '700' }}
          >
            Criar e acessar
          </TextAtoms>
        </ButtonTouchableOpacityAton>
      </BoxAtoms>
      <BoxAtoms
        $flex={{ $flex: 1, $justifyContent: 'flex-end', $rowGap: 16 }}
        // $position={{ position: 'absolute' }}
        $space={{ $mt: 'x64', $mb: 'm24' }}
        // $bg={{ $background: 'green_700' }}
      >
        <ButtonTouchableOpacityAton
          $height={{ $height: 56 }}
          $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
          $bg={{ $background: 'transparent' }}
          $border={{
            $b: { width: 1, color: 'green_500', style: 'solid ' },
            $r: { width: 8 }
          }}
          onPress={handleGoBackScreen}
        >
          <TextAtoms
            $text={{ $align: 'center' }}
            $color={{ $color: 'green_500' }}
            $font={{ $weigh: '700' }}
          >
            Voltar para o login
          </TextAtoms>
        </ButtonTouchableOpacityAton>
      </BoxAtoms>
    </FormTemplates>
  );
}
