import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { TextInputAtoms } from '@atoms/TextInputAtoms';

import { LoadingAtoms } from '@atoms/LoadingAtoms';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/public.routes';
import { FormTemplates } from '@templates/FromTemplates';
import { AppError } from '@utils/AppError';
import {
  FIELD_IVALLID,
  FIELD_MIN,
  FIELD_REQUIRID
} from '@utils/constants/AppErrorContants';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import * as yup from 'yup';
import { useAuth } from '../hooks/useAuth';

type FormDataProps = {
  email: string;
  password: string;
};

const signIpSchema = yup.object({
  email: yup.string().required(FIELD_REQUIRID).email(FIELD_IVALLID),
  password: yup.string().required(FIELD_REQUIRID).min(6, FIELD_MIN)
});

export function SigninOrganisms() {
  const { singIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormDataProps>({
    resolver: yupResolver(signIpSchema)
  });

  async function handleSignIn({ email, password }: FormDataProps) {
    try {
      setLoading(true);
      await singIn(email, password);
      setLoading(false);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const message = isAppError
        ? error.message
        : 'Não foi posível entrar. Tente novamente mais tarde.';

      setLoading(false);

      Toast.show({
        type: 'error',
        text1: `${message}`,
        position: 'top'
      });
    }
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
        {loading ? (
          <ButtonTouchableOpacityAton
            $height={{ $height: 56 }}
            $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
            $bg={{ $background: 'green_700' }}
            $border={{
              $r: { width: 8 }
            }}
            onPress={handleSubmit(handleSignIn)}
            disabled
          >
            <TextAtoms
              $text={{ $align: 'center' }}
              $color={{ $color: 'white' }}
              $font={{ $weigh: '700' }}
            >
              {loading ? (
                <LoadingAtoms
                  $bg={{ $background: 'transparent' }}
                  $color={{ $color: 'gray_100' }}
                />
              ) : (
                'Acessar'
              )}
            </TextAtoms>
          </ButtonTouchableOpacityAton>
        ) : (
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
        )}
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
