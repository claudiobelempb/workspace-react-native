import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { TextInputAtoms } from '@atoms/TextInputAtoms';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/private.routes';
import { FormTemplates } from '@templates/FromTemplates';
import {
  FIELD_IVALLID,
  FIELD_MIN,
  FIELD_REQUIRID
} from '@utils/constants/AppErrorContants';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

type FormDataProps = {
  email: string;
  password: string;
};

const signIpSchema = yup.object({
  email: yup.string().required(FIELD_REQUIRID).email(FIELD_IVALLID),
  password: yup.string().required(FIELD_REQUIRID).min(6, FIELD_MIN)
});

export function SigninOrganisms() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormDataProps>({
    resolver: yupResolver(signIpSchema)
  });

  function handleSignIn(field: FormDataProps) {
    console.log(field);
  }

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
        <Controller
          control={control}
          name='email'
          render={({ field: { onChange, value } }) => (
            <TextInputAtoms
              $opacity={0.6}
              placeholder='Email'
              $height={{ $height: 56 }}
              $bg={{ $background: 'gray_700' }}
              $color={{ $color: 'gray_100' }}
              $space={{ $p: 's10' }}
              $border={{ $r: { width: 8 } }}
              onChangeText={onChange}
              value={value}
              $inputValid={{
                $border: {
                  $border: {
                    width: 1,
                    style: 'solid ',
                    color: errors.email?.message ? 'red_500' : 'transparent'
                  }
                }
              }}
              $validation={{
                $message: errors.email?.message,
                $valid: !!errors.email?.message,
                $color: 'red_500'
              }}
            />
          )}
        />

        <Controller
          control={control}
          name='password'
          render={({ field: { onChange, value } }) => (
            <TextInputAtoms
              $opacity={0.6}
              placeholder='Senha'
              $height={{ $height: 56 }}
              $bg={{ $background: 'gray_700' }}
              $color={{ $color: 'gray_100' }}
              $space={{ $p: 's10' }}
              $border={{ $r: { width: 8 } }}
              onSubmitEditing={handleSubmit(handleSignIn)}
              secureTextEntry
              returnKeyType='send'
              onChangeText={onChange}
              value={value}
              $inputValid={{
                $border: {
                  $border: {
                    width: 1,
                    style: 'solid ',
                    color: errors.password?.message ? 'red_500' : 'transparent'
                  }
                }
              }}
              $validation={{
                $message: errors.password?.message,
                $valid: !!errors.password?.message,
                $color: 'red_500'
              }}
            />
          )}
        />
        <ButtonTouchableOpacityAton
          $height={{ $height: 56 }}
          $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
          $bg={{ $background: 'green_700' }}
          $border={{
            $r: { width: 8 }
          }}
          onPress={handleSubmit(handleSignIn)}
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
