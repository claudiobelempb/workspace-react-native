import { Button, IButtonProps, Text } from 'native-base';

type Props = {
  title: string;
} & IButtonProps;

export function AppButton({ ...props }: Props) {
  return (
    <Button
      {...props}
      w={'full'}
      h={14}
      bg={'green.700'}
      rounded={'sm'}
      _pressed={{ bg: 'green.500' }}
    >
      <Text color={'white'} fontFamily={'heading'} fontSize={'sm'}>
        {props.title}
      </Text>
    </Button>
  );
}
