import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useRoute} from '@react-navigation/core';
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Back from '../../components/Back';
import Button from '../../components/Button';
import Input from '../../components/Input';
import FormContext from '../../context/FormContext';
import theme from '../../styles/theme';

function PasswordForm() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const params: any = useRoute().params;
  const {nickname, nicknameChange, password, passwordChange} =
    useContext(FormContext);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    nickname.length >= 4 && password.length >= 4
      ? setDisabled(false)
      : setDisabled(true);
  }, [nickname, password]);
  return (
    <View style={styles.container}>
      <Back />
      <Text style={styles.header}>Register</Text>
      <View style={styles.formContainer}>
        <Text style={styles.subText}>PICK A USERNAME</Text>
        <Input
          textInputProps={{
            placeholder: 'What should everyone call you?',
            value: nickname,
            onChangeText: nicknameChange,
          }}></Input>
        <Text style={styles.minText}>You can always change this later!</Text>
        <Input
          textInputProps={{
            placeholder: 'Password',
            value: password,
            onChangeText: passwordChange,
          }}
          type="password"
          error={params?.passwordError ? params.passwordError : ''}></Input>
        <Button onPress={() => navigation.push('dob')} disabled={disabled}>
          Next
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark,
    padding: 16,
    paddingTop: 32,
  },
  formContainer: {
    marginVertical: 16,
  },
  subText: {
    fontSize: theme.typography.size.subText,
    color: theme.colors.light,
    fontWeight: '800',
    marginBottom: 8,
  },
  header: {
    fontSize: theme.typography.size.subHeader,
    color: theme.colors.light,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 16,
  },
  minText: {
    fontSize: 10,
    color: theme.colors.light_accent,
    marginBottom: 24,
    transform: [{translateY: -16}],
  },
});
export default PasswordForm;
