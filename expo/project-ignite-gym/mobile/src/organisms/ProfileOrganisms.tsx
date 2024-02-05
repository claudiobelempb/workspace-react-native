import AvatarDefaultImg from '@assets/userPhotoDefault.png';
import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { LoadingAtoms } from '@atoms/LoadingAtoms';
import { SkeletonAtoms } from '@atoms/SkeletonAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { TextInputAtoms } from '@atoms/TextInputAtoms';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@hooks/useAuth';
import { useUpdateFormProfile } from '@hooks/user/useUpdateFormProfile';
import { HeaderMolecules } from '@molecules/HeaderMolecules';
import { api } from '@services/api';
import { AppError } from '@utils/AppError';
import {
  FIELD_MIN,
  FIELD_NOT_EQUAL,
  FIELD_REQUIRID,
  PROFILE_UPDATE_ERROR,
  PROFILE_UPDATE_SUCCESS
} from '@utils/constants/AppErrorContants';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';
import { UserProfileDTO } from 'src/dtos/UserDTO';
import { useTheme } from 'styled-components/native';
import * as yup from 'yup';

const profileSchema = yup.object({
  name: yup.string().required(FIELD_REQUIRID),
  email: yup.string(),
  old_password: yup
    .string()
    .min(6, FIELD_MIN)
    .nullable()
    .transform(value => (!!value ? value : null)),
  password: yup
    .string()
    .min(6, FIELD_MIN)
    .nullable()
    .transform(value => (!!value ? value : null)),
  confirm_password: yup
    .string()
    .min(6, FIELD_MIN)
    .nullable()
    .transform(value => (!!value ? value : null))
    .oneOf([yup.ref('password')], FIELD_NOT_EQUAL)
    .when('password', {
      is: (Field: any) => Field,
      then: schema =>
        schema
          .nullable()
          .required(FIELD_REQUIRID)
          .transform(value => (!!value ? value : null))
    })
});

export function ProfileOrganisms() {
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdatingForm, setIsUpdatingFrom] = useState(false);
  const [userPhoto, setUserPhoto] = useState('');

  const { color } = useTheme();
  const { contextUser, contextUpdateUserProfile } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<UserProfileDTO>({
    defaultValues: {
      name: contextUser.name,
      email: contextUser.email,
      old_password: '',
      password: '',
      confirm_password: ''
    },
    resolver: yupResolver(profileSchema)
  });

  async function handleSubmitProfile(data: UserProfileDTO) {
    try {
      setIsUpdatingFrom(true);
      const userUpdated = contextUser;
      userUpdated.name = data.name;
      await useUpdateFormProfile(data);
      await contextUpdateUserProfile(userUpdated);

      Toast.show({
        type: 'success',
        text1: PROFILE_UPDATE_SUCCESS,
        position: 'top',
        swipeable: true
      });
    } catch (error) {
      const isAppError = error instanceof AppError;
      const msg = isAppError ? error.message : PROFILE_UPDATE_ERROR;
      console.log(msg);

      Toast.show({
        type: 'error',
        text1: msg,
        position: 'top',
        swipeable: true
      });
    } finally {
      setIsUpdatingFrom(false);
    }
  }

  async function handleUserPhotoSelectd() {
    setIsLoading(true);
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true
      });

      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri
        );

        if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 1) {
          return Toast.show({
            type: 'error',
            text1: 'Essa imagem é muito grande',
            text2: 'Escolha uma de até 5MB',
            position: 'top',
            swipeable: true
          });
        }

        const fileExtension = photoSelected.assets[0].uri.split('.').pop();
        const name = contextUser.name.trim().toLowerCase();

        const photoFile = {
          name: `${name}.${fileExtension}`.toLowerCase().replace(/\s/g, ''),
          url: photoSelected.assets[0].uri,
          type: `${photoSelected.assets[0].type}/${fileExtension}`
        } as any;

        const userUploadPhotoFormProfile = new FormData();
        userUploadPhotoFormProfile.append('avatar', photoFile);

        await api.patch('/users/avatar', userUploadPhotoFormProfile, {
          headers: {
            accept: 'application/json',
            'content-type': 'multipart/form-data'
          }
        });

        Toast.show({
          type: 'success',
          text1: 'Foto atualizada!',
          position: 'top',
          swipeable: true
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ContainerAtoms $bg={{ $background: 'gray_500' }} $flex={{ $flex: 1 }}>
      <HeaderMolecules title='Perfil' />
      <ContentAtoms
        $bg={{ $background: 'gray_700' }}
        $flex={{ $flex: 1, $alingItems: 'center' }}
      >
        <ScrollView
          style={{
            flex: 1,
            width: '100%',
            backgroundColor: color.gray_700,
            padding: 24
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 16 }}
        >
          <BoxAtoms
            $flex={{
              $rowGap: 10,
              $justifyContent: 'center',
              $alingItems: 'center'
            }}
          >
            {isLoading ? (
              <SkeletonAtoms
                $lines={1}
                // $spacings={50}
                $height={{ $height: 100 }}
                $width={{ $minWidth: 100 }}
                $overflow='hidden'
                $border={{ $r: { width: 50 } }}
                $bg={{ $background: 'gray_400' }}
                $opacity={0.6}
              />
            ) : (
              <ImageAtoms
                source={
                  contextUser.avatar ? { uri: userPhoto } : AvatarDefaultImg
                }
                $width={{ $width: 100 }}
                $height={{ $height: 100 }}
                $border={{
                  $b: { width: 2, color: 'gray_100', style: 'solid ' },
                  $r: { width: 50 }
                }}
                $space={{ $p: 's5' }}
              />
            )}

            <ButtonTouchableOpacityAton
              $height={{ $height: 32 }}
              $width={{ $width: 100 }}
              $flex={{ $justifyContent: 'center' }}
              $space={{ $p: 's5' }}
              $border={{ $r: { width: 5 } }}
              onPress={handleUserPhotoSelectd}
            >
              <TextAtoms
                $color={{ $color: 'green_500' }}
                $font={{ $weigh: '700', $size: 'm16' }}
                $text={{ $align: 'center' }}
              >
                Alterar foto
              </TextAtoms>
            </ButtonTouchableOpacityAton>
          </BoxAtoms>
          <BoxAtoms
            $width={{ $width: 100 }}
            $flex={{ $rowGap: 10 }}
            $space={{ $mt: 'l32' }}
          >
            <Controller
              control={control}
              name='name'
              render={({ field: { value, onChange } }) => (
                <TextInputAtoms
                  value={value}
                  onChangeText={onChange}
                  placeholder={value}
                  placeholderTextColor={color.gray_300}
                  $height={{ $height: 56 }}
                  $space={{ $py: 's10' }}
                  $color={{ $color: 'gray_100' }}
                  $bg={{ $background: 'gray_600' }}
                  $border={{ $r: { width: 8 } }}
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
              render={({ field: { value, onChange } }) => (
                <TextInputAtoms
                  placeholder={value}
                  placeholderTextColor={color.gray_300}
                  $height={{ $height: 56 }}
                  $space={{ $py: 's10' }}
                  $color={{ $color: 'gray_100' }}
                  $bg={{ $background: 'gray_600' }}
                  $border={{ $r: { width: 8 } }}
                  editable={false}
                  $opacity={0.6}
                />
              )}
            />
          </BoxAtoms>
          <BoxAtoms
            $width={{ $width: 100 }}
            $flex={{ $rowGap: 10 }}
            $space={{ $mt: 'l32' }}
          >
            <TextAtoms $color={{ $color: 'gray_100' }}>Alterar senha</TextAtoms>

            <Controller
              control={control}
              name='old_password'
              render={({ field: { value, onChange } }) => (
                <TextInputAtoms
                  onChangeText={onChange}
                  placeholder='Senha antiga'
                  placeholderTextColor={color.gray_300}
                  $height={{ $height: 56 }}
                  $space={{ $py: 's10' }}
                  $color={{ $color: 'gray_100' }}
                  $bg={{ $background: 'gray_600' }}
                  $border={{ $r: { width: 8 } }}
                  secureTextEntry
                />
              )}
            />

            <Controller
              control={control}
              name='password'
              render={({ field: { value, onChange } }) => (
                <TextInputAtoms
                  onChangeText={onChange}
                  placeholder='Nova senha'
                  placeholderTextColor={color.gray_300}
                  $height={{ $height: 56 }}
                  $space={{ $py: 's10' }}
                  $color={{ $color: 'gray_100' }}
                  $bg={{ $background: 'gray_600' }}
                  $border={{ $r: { width: 8 } }}
                  secureTextEntry
                  $inputValid={{
                    $border: {
                      $border: {
                        width: 1,
                        style: 'solid ',
                        color: errors.password?.message
                          ? 'red_500'
                          : 'transparent'
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
              name='confirm_password'
              render={({ field: { value, onChange } }) => (
                <TextInputAtoms
                  onChangeText={onChange}
                  placeholder='Confirme a nova senha'
                  placeholderTextColor={color.gray_300}
                  $height={{ $height: 56 }}
                  $space={{ $py: 's10' }}
                  $color={{ $color: 'gray_100' }}
                  $bg={{ $background: 'gray_600' }}
                  $border={{ $r: { width: 8 } }}
                  secureTextEntry
                  $inputValid={{
                    $border: {
                      $border: {
                        width: 1,
                        style: 'solid ',
                        color: errors.confirm_password?.message
                          ? 'red_500'
                          : 'transparent'
                      }
                    }
                  }}
                  $validation={{
                    $message: errors.confirm_password?.message,
                    $valid: !!errors.confirm_password?.message,
                    $color: 'red_500'
                  }}
                />
              )}
            />
          </BoxAtoms>
          <BoxAtoms $width={{ $width: 100 }} $space={{ $mx: 'l32' }}>
            {isUpdatingForm ? (
              <>
                {/* <SkeletonAtoms
                $lines={1}
                // $spacings={50}
                $height={{ $height: 56 }}
                $width={{ $width: 100 }}
                $overflow='hidden'
                $border={{ $r: { width: 5 } }}
                $bg={{ $background: 'green_700' }}
                $opacity={0.6}
                /> */}
                <ButtonTouchableOpacityAton
                  disabled
                  $height={{ $height: 56 }}
                  $bg={{ $background: 'green_500' }}
                  $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
                  $border={{ $r: { width: 8 } }}
                >
                  <TextAtoms
                    $color={{ $color: 'gray_100' }}
                    $font={{ $weigh: '700' }}
                  >
                    <LoadingAtoms $color={{ $color: 'gray_100' }} />
                  </TextAtoms>
                </ButtonTouchableOpacityAton>
              </>
            ) : (
              <ButtonTouchableOpacityAton
                $height={{ $height: 56 }}
                $bg={{ $background: 'green_500' }}
                $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
                $border={{ $r: { width: 8 } }}
                onPress={handleSubmit(handleSubmitProfile)}
              >
                <TextAtoms
                  $color={{ $color: 'gray_100' }}
                  $font={{ $weigh: '700' }}
                >
                  Atualizar
                </TextAtoms>
              </ButtonTouchableOpacityAton>
            )}
          </BoxAtoms>
        </ScrollView>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
