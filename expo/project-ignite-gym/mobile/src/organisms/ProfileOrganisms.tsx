import AvatarDefaultImg from '@assets/userPhotoDefault.png';
import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { SkeletonAtoms } from '@atoms/SkeletonAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { TextInputAtoms } from '@atoms/TextInputAtoms';
import { useAuth } from '@hooks/useAuth';
import { HeaderMolecules } from '@molecules/HeaderMolecules';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';
import { useTheme } from 'styled-components/native';

export function ProfileOrganisms() {
  const [name, setName] = useState('');
  const [pasword, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmePassword, setConfirmePassword] = useState('');
  const [active, setActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState('');

  const { color } = useTheme();
  const { contextUser } = useAuth();

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

        setUserPhoto(photoSelected.assets[0].uri);
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
            <TextInputAtoms
              value={name}
              onChangeText={setName}
              placeholder='Rodrigo Gonçalves'
              placeholderTextColor={color.gray_300}
              $height={{ $height: 56 }}
              $space={{ $py: 's10' }}
              $color={{ $color: 'gray_100' }}
              $bg={{ $background: 'gray_600' }}
              $border={{ $r: { width: 8 } }}
            />
            <TextInputAtoms
              value='rodrigo@email.com'
              placeholderTextColor={color.gray_300}
              $height={{ $height: 56 }}
              $space={{ $py: 's10' }}
              $color={{ $color: 'gray_100' }}
              $bg={{ $background: 'gray_600' }}
              $border={{ $r: { width: 8 } }}
              editable={false}
              $opacity={0.6}
            />
          </BoxAtoms>
          <BoxAtoms
            $width={{ $width: 100 }}
            $flex={{ $rowGap: 10 }}
            $space={{ $mt: 'l32' }}
          >
            <TextAtoms $color={{ $color: 'gray_100' }}>Alterar senha</TextAtoms>
            <TextInputAtoms
              value={pasword}
              onChangeText={setPassword}
              placeholder='Senha antiga'
              placeholderTextColor={color.gray_300}
              $height={{ $height: 56 }}
              $space={{ $py: 's10' }}
              $color={{ $color: 'gray_100' }}
              $bg={{ $background: 'gray_600' }}
              $border={{ $r: { width: 8 } }}
              secureTextEntry
            />
            <TextInputAtoms
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder='Nova senha'
              placeholderTextColor={color.gray_300}
              $height={{ $height: 56 }}
              $space={{ $py: 's10' }}
              $color={{ $color: 'gray_100' }}
              $bg={{ $background: 'gray_600' }}
              $border={{ $r: { width: 8 } }}
              secureTextEntry
            />
            <TextInputAtoms
              value={confirmePassword}
              onChangeText={setConfirmePassword}
              placeholder='Confirme a nova senha'
              placeholderTextColor={color.gray_300}
              $height={{ $height: 56 }}
              $space={{ $py: 's10' }}
              $color={{ $color: 'gray_100' }}
              $bg={{ $background: 'gray_600' }}
              $border={{ $r: { width: 8 } }}
              secureTextEntry
            />
          </BoxAtoms>
          <BoxAtoms $width={{ $width: 100 }} $space={{ $mx: 'l32' }}>
            {isLoading ? (
              <SkeletonAtoms
                $lines={1}
                // $spacings={50}
                $height={{ $height: 56 }}
                $width={{ $width: 100 }}
                $overflow='hidden'
                $border={{ $r: { width: 5 } }}
                $bg={{ $background: 'gray_400' }}
                $opacity={0.6}
              />
            ) : (
              <ButtonTouchableOpacityAton
                $height={{ $height: 56 }}
                $bg={{ $background: 'green_500' }}
                $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
                $border={{ $r: { width: 8 } }}
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
