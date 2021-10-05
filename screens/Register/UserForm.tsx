import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Back from '../../components/Back';
import Button from '../../components/Button';
import Input from '../../components/Input';
import theme from '../../styles/theme';
import Toggle from '../../components/Toggle';
import FormContext from '../../context/FormContext';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

function UserForm() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const params: any = useRoute().params;
  const {phone, phoneChange, phoneCode, mail, mailChange} =
    useContext(FormContext);

  const [inputType, setInputType] = useState('phone');
  const [error, setError] = useState({phone: '', mail: ''});
  const toggleHandler = (num: number) => {
    setInputType(num ? 'email' : 'phone');
  };

  useEffect(() => {
    if (params === undefined) return;
    if (params.emailError !== undefined) {
      setError(prevState => ({...prevState, mail: params.emailError}));
      setInputType('email');
    }
  }, [params]);
  const submitHandler = () => {
    if (inputType === 'phone') {
    } else {
      navigation.push('password');
    }
  };
  return (
    <View style={styles.container}>
      <Back />
      <Text style={styles.header}>Enter phone or email</Text>
      <Toggle
        state={inputType === 'phone' ? 0 : 1}
        options={['Phone', 'Email']}
        onPress={toggleHandler}></Toggle>
      <View style={styles.formContainer}>
        <Text style={styles.subText}>
          {inputType === 'phone' ? 'PHONE NUMBER' : 'EMAIL'}
        </Text>
        {inputType === 'phone' ? (
          <Input
            type="phone"
            phoneCode={phoneCode}
            textInputProps={{
              placeholder: 'Phone Number',
              autoCapitalize: 'none',
              autoFocus: true,
              keyboardAppearance: 'dark',
              keyboardType: 'phone-pad',
              value: phone,
              onChangeText: phoneChange,
            }}
            error={error.phone}></Input>
        ) : (
          <Input
            textInputProps={{
              placeholder: 'Email',
              autoFocus: false,
              keyboardAppearance: 'dark',
              keyboardType: 'email-address',
              autoCapitalize: 'none',
              value: mail,
              onChangeText: mailChange,
            }}
            error={error.mail}></Input>
        )}

        <Button
          onPress={submitHandler}
          disabled={
            !(
              (inputType === 'phone' && phone.length > 0) ||
              (inputType === 'email' && mail.length > 0)
            )
          }>
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
});
export default UserForm;
