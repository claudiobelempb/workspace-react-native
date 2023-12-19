import BackgroundImg from '@assets/background.png';
import { Center, Heading, Image, Text, VStack } from 'native-base';

import LogoSvg from '@assets/logo.svg';
import { AppButton } from '@components/AppButton';
import { AppInput } from '@components/AppInput';
export function SignIn() {
  return (
    <VStack flex={1} bg={'gray.700'} px={10}>
      <Image
        source={BackgroundImg}
        alt='Pessoas treinando'
        resizeMode='contain'
        position='absolute'
      />

      <Center my={24}>
        <LogoSvg />
        <Text color={'gray.100'} fontSize={'sm'}>
          Treine sua mente e o seu corpo
        </Text>
      </Center>

      <Heading
        fontSize={'xl'}
        color={'gray.100'}
        mb={6}
        fontFamily={'heading'}
        textAlign={'center'}
      >
        Acesse sua conta
      </Heading>
      <AppInput
        placeholder='E-mail'
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <AppInput placeholder='Senha' secureTextEntry={true} />

      <AppButton title='Acessar' />
    </VStack>
  );
}
