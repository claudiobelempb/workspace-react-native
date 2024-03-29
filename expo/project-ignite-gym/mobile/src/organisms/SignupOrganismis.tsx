import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { TextInputAtoms } from '@atoms/TextInputAtoms';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { LoadingAtoms } from '@atoms/LoadingAtoms';
import { useAuth } from '@hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/public.routes';
import { api } from '@services/api';
import { FormTemplates } from '@templates/FromTemplates';
import { handleOnFocus } from '@themes/functions/handleOnFocus';
import { AppError } from '@utils/AppError';
import {
  FIELD_IVALLID,
  FIELD_MIN,
  FIELD_NOT_EQUAL,
  FIELD_REQUIRID
} from '@utils/constants/AppErrorContants';
import { useState } from 'react';
import Toast from 'react-native-toast-message';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const signUpSchema = yup.object({
  name: yup.string().required(FIELD_REQUIRID),
  email: yup.string().required(FIELD_REQUIRID).email(FIELD_IVALLID),
  password: yup.string().required(FIELD_REQUIRID).min(6, FIELD_MIN),
  passwordConfirm: yup
    .string()
    .required(FIELD_REQUIRID)
    .oneOf([yup.ref('password')], FIELD_NOT_EQUAL)
});

export function SignupOrganismis() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const [isLoading, setIsloading] = useState(true);
  const { contextSingIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  function handleGoBackScreen() {
    navigation.goBack();
  }

  async function handleSignUp({ name, email, password }: FormDataProps) {
    try {
      setIsloading(true);
      await api.post('/users', { name, email, password });
      await contextSingIn(email, password);
      Toast.show({
        type: 'success',
        text1: 'Cadastro com sucesso.',
        position: 'top'
      });
    } catch (error) {
      setIsloading(false);
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : 'Não foi possível criar a conta. Tente novamente mais tarde.';

      Toast.show({
        type: 'error',
        text1: `${title}`,
        position: 'top'
      });
    }
  }

  return (
    <FormTemplates>
      <BoxAtoms $flex={{ $rowGap: 5 }}>
        <HeadingAtoms
          $color={{ $color: 'gray_100' }}
          $text={{ $align: 'center' }}
          $space={{ $mt: 'x64' }}
        >
          Crie sua conta
        </HeadingAtoms>
        <Controller
          control={control}
          name='name'
          render={({ field: { onChange, value } }) => (
            <TextInputAtoms
              $opacity={0.6}
              placeholder='Name'
              $height={{ $height: 56 }}
              $bg={{ $background: 'gray_700' }}
              $color={{ $color: 'gray_100' }}
              $space={{ $p: 's10' }}
              $border={{ $r: { width: 8 } }}
              onChangeText={onChange}
              handleOnFocus={handleOnFocus}
              value={value}
              $inputValid={{
                $border: {
                  $border: {
                    width: 1,
                    style: 'solid ',
                    color: errors.name?.message ? 'red_500' : 'transparent'
                  }
                }
              }}
              $validation={{
                $message: errors.name?.message,
                $valid: !!errors.name?.message,
                $color: 'red_500'
              }}
            />
          )}
        />
        <Controller
          control={control}
          name='email'
          render={({ field: { onChange, value } }) => (
            <TextInputAtoms
              $opacity={0.6}
              placeholder='Email'
              keyboardType='email-address'
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
              secureTextEntry
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

        <Controller
          control={control}
          name='passwordConfirm'
          render={({ field: { onChange, value } }) => (
            <TextInputAtoms
              $opacity={0.6}
              placeholder='Confirme a Senha'
              $height={{ $height: 56 }}
              $bg={{ $background: 'gray_700' }}
              $color={{ $color: 'gray_100' }}
              $space={{ $p: 's10' }}
              $border={{ $r: { width: 8 } }}
              onChangeText={onChange}
              value={value}
              onSubmitEditing={handleSubmit(handleSignUp)}
              secureTextEntry
              returnKeyType='send'
              $inputValid={{
                $border: {
                  $border: {
                    width: 1,
                    style: 'solid ',
                    color: errors.passwordConfirm?.message
                      ? 'red_500'
                      : 'transparent'
                  }
                }
              }}
              $validation={{
                $message: errors.passwordConfirm?.message,
                $valid: !!errors.passwordConfirm?.message,
                $color: 'red_500'
              }}
            />
          )}
        />
        {isLoading ? (
          <ButtonTouchableOpacityAton
            $height={{ $height: 56 }}
            $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
            $bg={{ $background: 'green_700' }}
            $border={{
              $r: { width: 8 }
            }}
            onPress={handleSubmit(handleSignUp)}
          >
            <TextAtoms
              $text={{ $align: 'center' }}
              $color={{ $color: 'white' }}
              $font={{ $weigh: '700' }}
            >
              Criar e acessar
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
            onPress={handleSubmit(handleSignUp)}
          >
            <TextAtoms
              $text={{ $align: 'center' }}
              $color={{ $color: 'white' }}
              $font={{ $weigh: '700' }}
            >
              <LoadingAtoms
                $bg={{ $background: 'transparent' }}
                $color={{ $color: 'gray_100' }}
              />
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
