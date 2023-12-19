import { Center, Spinner } from 'native-base';

export function AppLoading() {
  return (
    <Center flex={1} bg={'gray.700'}>
      <Spinner color='green.500' />
    </Center>
  );
}
