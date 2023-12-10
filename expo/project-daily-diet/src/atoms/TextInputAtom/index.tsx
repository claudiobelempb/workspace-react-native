import { TextInputProps } from 'react-native';

import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { useTheme } from 'styled-components/native';
import { TextInputAtomContainer } from './styles';

type Props = {} & TextInputProps & typeDefault;

export function TextInputAtom({ ...props }: Props) {
  const { variant } = useTheme();

  switch (props.typeInput) {
    case 'tex-area':
      return (
        <TextInputAtomContainer
          minHeight={48}
          padding={props.padding}
          paddingLeft={props.paddingLeft}
          isBorderRadius
          isBorder
          variantBorderColor='gray_300'
          variantBackgroud={'gray_200'}
          variantColor={'gray_700'}
          direction={props.direction}
          alignSelf={props.alignSelf}
          alingItems={props.alingItems}
          alingContent={props.alingContent}
          justifyContent={props.justifyContent}
          onChangeText={props.onChangeText}
          isActive={props.isActive}
          placeholderTextColor={variant.gray_600}
          marginBottom={props.marginBottom}
          placeholder={props.placeholder}
          value={props.value}
          flex={props.flex}
          space={{ padding: 's12px' }}
          ref={props.inputRef}
          onSubmitEditing={props.onSubmitEditing}
          autoCorrect={props.autoCorrect}
          returnKeyType='done'
          numberOfLines={6}
          multiline={true}
          textAlignVertical='top'
          {...props}
        />
      );
    case 'selected':
      return (
        <BoxTemplate>
          <TextInputAtomContainer {...props} />
        </BoxTemplate>
      );
    case 'not-selected':
      return (
        <TextInputAtomContainer
          minHeight={props.minHeight}
          padding={props.padding}
          paddingLeft={props.paddingLeft}
          isWidth={props.isWidth}
          isBorderRadius={props.isBorderRadius}
          variantBackgroud={props.variantBackgroud}
          variantColor={props.variantColor}
          direction={props.direction}
          alignSelf={props.alignSelf}
          alingItems={props.alingItems}
          alingContent={props.alingContent}
          justifyContent={props.justifyContent}
          onChangeText={props.onChangeText}
          isActive={props.isActive}
          placeholderTextColor={variant.gray_300}
          marginBottom={props.marginBottom}
          placeholder={props.placeholder}
          value={props.value}
          flex={props.flex}
          space={props.space}
          ref={props.inputRef}
          onSubmitEditing={props.onSubmitEditing}
          autoCorrect={props.autoCorrect}
          returnKeyType='done'
        />
      );
    default:
      return (
        <>
          <TextInputAtomContainer
            minHeight={48}
            padding={props.padding}
            paddingLeft={props.paddingLeft}
            isBorderRadius
            isBorder
            variantBorderColor='gray_300'
            variantBackgroud={'gray_200'}
            variantColor={'gray_700'}
            direction={props.direction}
            alignSelf={props.alignSelf}
            alingItems={props.alingItems}
            alingContent={props.alingContent}
            justifyContent={props.justifyContent}
            onChangeText={props.onChangeText}
            isActive={props.isActive}
            placeholderTextColor={variant.gray_600}
            marginBottom={props.marginBottom}
            placeholder={props.placeholder}
            value={props.value}
            flex={props.flex}
            space={{ padding: 's12px' }}
            ref={props.inputRef}
            onSubmitEditing={props.onSubmitEditing}
            autoCorrect={props.autoCorrect}
            returnKeyType='done'
            {...props}
          />
        </>
      );
  }
}
