import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { TextInputAtom } from '@atoms/TextInputAtom';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { FormTemplates } from '@templates/FromTemplates';
import React, { useState } from 'react';

export function SigninOrganisms() {
  const [isFocused, setIsFocused] = useState();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleGoSignupScreen() {
    navigation.navigate('signup');
  }

  return (
    <FormTemplates>
      <BoxAtoms $flex={{ $rowGap: 16 }}>
        <HeadingAtoms
          $color={{ $color: 'gray_100' }}
          $text={{ $align: 'center' }}
          $space={{ $mt: 'x64' }}
        >
          Acesse sua conta
        </HeadingAtoms>
        <TextInputAtom
          $opacity={0.6}
          placeholder='Email'
          keyboardType='email-address'
        />
        <TextInputAtom
          // $inputOnFocus
          //onFocus={()=> setIsFocused(!!$inputOnBlur)}
          //onBlur={()=>setIsFocused({isFocused:false})}
          $opacity={0.6}
          placeholder='Senha'
        />
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
            Acessar
          </TextAtoms>
        </ButtonTouchableOpacityAton>
      </BoxAtoms>
      <BoxAtoms
        $flex={{ $flex: 1, $justifyContent: 'flex-end', $rowGap: 16 }}
        // $position={{ position: 'absolute' }}
        $space={{ $mt: 'x64', $mb: 'm24' }}
        // $bg={{ $background: 'green_700' }}
      >
        <TextAtoms $text={{ $align: 'center' }} $color={{ $color: 'gray_100' }}>
          Ainda não tem acesso?
        </TextAtoms>
        <ButtonTouchableOpacityAton
          $height={{ $height: 56 }}
          $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
          $bg={{ $background: 'transparent' }}
          $border={{
            $b: { width: 1, color: 'green_500', style: 'solid ' },
            $r: { width: 8 }
          }}
          onPress={handleGoSignupScreen}
        >
          <TextAtoms
            $text={{ $align: 'center' }}
            $color={{ $color: 'green_500' }}
            $font={{ $weigh: '700' }}
          >
            Criar conta
          </TextAtoms>
        </ButtonTouchableOpacityAton>
      </BoxAtoms>
    </FormTemplates>
  );
}
