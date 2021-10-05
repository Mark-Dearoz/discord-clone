import React, {useState} from 'react';
import {
  View,
  TextInputProps,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
} from 'react-native';
import theme from '../styles/theme';
import globalStyles from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import phoneCodes from '../assets/phoneCodes';
import EyeSVG from '../assets/svgs/EyeSVG';
import EyeCrossSVG from '../assets/svgs/EyeCrossSVG';
import CrossSVG from '../assets/svgs/CrossSVG';

interface InputProps {
  type?: 'phone' | 'password';
  phoneCode?: string;
  textInputProps: TextInputProps;
  error?: string;
}

function Input(props: InputProps) {
  const navigation: any = useNavigation();
  const [visible, setVisible] = useState(false);
  const openDropDown = () => {
    navigation.navigate('dropdown', phoneCodes);
  };
  return (
    <>
      <View style={styles.container}>
        {props.type === 'phone' && (
          <Pressable style={styles.phoneCodeButton} onPress={openDropDown}>
            <Text style={styles.phoneCodeText}>{props.phoneCode}</Text>
          </Pressable>
        )}

        <TextInput
          {...props.textInputProps}
          placeholderTextColor={theme.colors.dark_accent}
          selectionColor={theme.colors.light}
          secureTextEntry={props.type === 'password' && !visible}
          style={[
            globalStyles.textInput,
            props.error ? styles.errorInput : {},
            props.type === 'phone' ? styles.phoneTextInput : {},
          ]}></TextInput>

        {props.type === 'password' ? (
          <Pressable onPress={() => setVisible(prevState => !prevState)}>
            {visible ? (
              <EyeCrossSVG style={styles.svg} />
            ) : (
              <EyeSVG style={styles.svg} />
            )}
          </Pressable>
        ) : props.textInputProps.value !== '' ? (
          <Pressable
            onPress={() =>
              props.textInputProps?.onChangeText
                ? props.textInputProps.onChangeText('')
                : null
            }>
            <CrossSVG style={[styles.svg, styles.crossSVG]} />
          </Pressable>
        ) : null}
      </View>
      <Text style={styles.errorText}>{props.error}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  phoneCodeButton: {
    display: 'flex',
    backgroundColor: theme.colors.extra_dark,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 41,
  },
  phoneTextInput: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  phoneCodeText: {
    color: theme.colors.light,
    fontWeight: '700',
  },
  errorInput: {borderWidth: 1, borderColor: theme.colors.error},
  errorText: {
    fontSize: theme.typography.size.subText,
    color: theme.colors.error,
    marginBottom: 8,
  },
  svg: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    alignSelf: 'center',
    height: 30,
    width: 30,
  },
  crossSVG: {
    height: 20,
    width: 20,
    bottom: 17,
  },
});

export default Input;
