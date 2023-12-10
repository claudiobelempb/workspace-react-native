import { TextAtom } from '@atoms/TextAtom';
import { TouchableOpacityContainer } from './styles';

import { IconAtom } from '@atoms/IconAtom';
import { typeDefault } from '@typesDefault/typesDefault';
import { TouchableOpacityProps } from 'react-native';

type Props = {
  icon?: 'left' | 'right';
  color?: string;
} & TouchableOpacityProps &
  typeDefault;

export function ButtonTouchableOpacityAton({
  icon = 'left',
  title,
  color,
  children,

  ...props
}: Props) {
  switch (props.typeButton) {
    case 'dark':
      return (
        <TouchableOpacityContainer
          minHeight={props.minHeight}
          maxHeight={50}
          isHeight
          isWidth={props.isWidth}
          minWidth={props.minWidth}
          maxWidth={props.maxWidth}
          isBorderRadius
          variantBackgroud={'gray_600'}
          direction={'row'}
          alignSelf={props.alignSelf}
          alingItems={'center'}
          alingContent={props.alingContent}
          justifyContent={'center'}
          columnGap={10}
          flex={props.flex}
          rowGap={props.rowGap}
          onPress={props.onPress}
          isActive={props.isActive}
          marginRight={props.marginRight}
          marginBottom={props.marginBottom}
          space={{ paddingX: 'm24px', paddingY: 'm16px' }}
          position={props.position}
          selected={props.selected}
        >
          {icon === 'left' && (
            <IconAtom typeIcon={props.typeIcon} color={'white'} />
          )}
          <TextAtom variantColor={'white'} fontWeigh='700'>
            {title ? title : 'dark'}
          </TextAtom>
          {icon === 'right' && (
            <IconAtom typeIcon={props.typeIcon} color={'white'} />
          )}
        </TouchableOpacityContainer>
      );
    case 'light':
      return (
        <TouchableOpacityContainer
          minHeight={props.minHeight}
          maxHeight={50}
          isHeight
          isWidth={props.isWidth}
          minWidth={props.minWidth}
          maxWidth={props.maxWidth}
          isBorderRadius
          variantBorderColor='gray_700'
          variantBackgroud={'white'}
          direction={'row'}
          alignSelf={props.alignSelf}
          alingItems={'center'}
          alingContent={props.alingContent}
          justifyContent={'center'}
          columnGap={10}
          flex={props.flex}
          rowGap={props.rowGap}
          onPress={props.onPress}
          isActive={props.isActive}
          marginRight={props.marginRight}
          marginBottom={props.marginBottom}
          space={{ paddingX: 'm24px', paddingY: 'm16px' }}
          position={props.position}
          selected={props.selected}
        >
          {icon === 'left' && (
            <IconAtom typeIcon={props.typeIcon} color={'white'} />
          )}
          <TextAtom variantColor={'black'} fontWeigh='700'>
            {title ? title : 'light'}
          </TextAtom>
          {icon === 'right' && (
            <IconAtom typeIcon={props.typeIcon} color={'white'} />
          )}
        </TouchableOpacityContainer>
      );
    case 'text':
      return (
        <TouchableOpacityContainer
          minHeight={props.minHeight}
          maxHeight={50}
          isHeight
          isWidth={props.isWidth}
          minWidth={props.minWidth}
          maxWidth={props.maxWidth}
          isBorderRadius
          variantBackgroud={'gray_600'}
          direction={'row'}
          alignSelf={props.alignSelf}
          alingItems={'center'}
          alingContent={props.alingContent}
          justifyContent={'center'}
          columnGap={10}
          flex={props.flex}
          rowGap={props.rowGap}
          onPress={props.onPress}
          isActive={props.isActive}
          marginRight={props.marginRight}
          marginBottom={props.marginBottom}
          space={{ paddingX: 'm24px', paddingY: 'm16px' }}
          position={props.position}
          selected={props.selected}
        >
          <TextAtom variantColor={'white'} fontWeigh='700'>
            {title ? title : 'text'}
          </TextAtom>
        </TouchableOpacityContainer>
      );
    case 'icon':
      return (
        <TouchableOpacityContainer
          minHeight={props.minHeight}
          maxHeight={50}
          isHeight
          isWidth={props.isWidth}
          minWidth={props.minWidth}
          maxWidth={props.maxWidth}
          isBorderRadius
          variantBackgroud={'gray_600'}
          direction={'row'}
          alignSelf={props.alignSelf}
          alingItems={'center'}
          alingContent={props.alingContent}
          justifyContent={'center'}
          columnGap={10}
          flex={props.flex}
          rowGap={props.rowGap}
          onPress={props.onPress}
          isActive={props.isActive}
          marginRight={props.marginRight}
          marginBottom={props.marginBottom}
          space={{ paddingX: 'm24px', paddingY: 'm16px' }}
          position={props.position}
          selected={props.selected}
        >
          <IconAtom typeIcon={props.typeIcon} color={'white'} />
        </TouchableOpacityContainer>
      );
    case 'selected':
      return (
        <TouchableOpacityContainer
          minHeight={props.minHeight}
          maxHeight={50}
          isHeight
          isWidth={props.isWidth}
          minWidth={props.minWidth}
          maxWidth={props.maxWidth}
          isBorderRadius
          variantBackgroud={'green_100'}
          variantActiveColor={props.variantActiveColor}
          variantBorderColor={'green_700'}
          direction={'row'}
          alignSelf={props.alignSelf}
          alingItems={'center'}
          alingContent={props.alingContent}
          justifyContent={'center'}
          columnGap={10}
          flex={props.flex}
          rowGap={props.rowGap}
          onPress={props.onPress}
          marginRight={props.marginRight}
          marginBottom={props.marginBottom}
          space={{ paddingX: 'm24px', paddingY: 'm16px' }}
          position={props.position}
          selected={props.selected}
        >
          <TextAtom isBorderRadius variantPointColor={'green_700'}></TextAtom>
          <TextAtom variantColor={'gray_700'} fontWeigh='700'>
            {title ? title : 'selected'}
          </TextAtom>
        </TouchableOpacityContainer>
      );
    case 'not-selected':
      return (
        <TouchableOpacityContainer
          minHeight={props.minHeight}
          maxHeight={50}
          isHeight
          isWidth={props.isWidth}
          minWidth={props.minWidth}
          maxWidth={props.maxWidth}
          isBorderRadius
          variantBackgroud={'red_100'}
          variantActiveColor={props.variantActiveColor}
          variantBorderColor={'red_700'}
          direction={'row'}
          alignSelf={props.alignSelf}
          alingItems={'center'}
          alingContent={props.alingContent}
          justifyContent={'center'}
          columnGap={10}
          flex={props.flex}
          rowGap={props.rowGap}
          onPress={props.onPress}
          isActive={props.isActive}
          marginRight={props.marginRight}
          marginBottom={props.marginBottom}
          space={{ paddingX: 'm24px', paddingY: 'm16px' }}
          position={props.position}
          active={props.active}
          selected={props.selected}
        >
          <TextAtom isBorderRadius variantPointColor={'red_700'}></TextAtom>
          <TextAtom variantColor={'gray_700'} fontWeigh='700'>
            {title ? title : 'not-selected'}
          </TextAtom>
        </TouchableOpacityContainer>
      );
    default:
      return (
        <TouchableOpacityContainer
          minHeight={props.minHeight}
          maxHeight={50}
          isHeight
          isWidth={props.isWidth}
          minWidth={props.minWidth}
          maxWidth={props.maxWidth}
          isBorderRadius
          isBorder={props.isBorder}
          variantBorderColor={props.variantBackgroud}
          variantBackgroud={props.variantBackgroud}
          direction={'row'}
          alignSelf={props.alignSelf}
          alingItems={'center'}
          alingContent={props.alingContent}
          justifyContent={'center'}
          columnGap={10}
          flex={props.flex}
          rowGap={props.rowGap}
          onPress={props.onPress}
          isActive={props.isActive}
          marginRight={props.marginRight}
          marginBottom={props.marginBottom}
          space={{ paddingX: 'm24px', paddingY: 'm16px' }}
          position={props.position}
          selected={props.selected}
          isSelectedGreen={props.isSelectedGreen}
          isSelectedRed={props.isSelectedRed}
        >
          {children}
        </TouchableOpacityContainer>
      );
  }
}
