import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import theme from '../styles/theme';
import Button from '../components/Button';
import Back from '../components/Back';
import useInput from '../hooks/useInput';
import Input from '../components/Input';

function Login() {
  const [user, userChange] = useInput('');
  const [password, passwordChange] = useInput('');

  return (
    <View style={styles.container}>
      <Back />
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Welcome back!</Text>
        <Text style={styles.subHeader}>We're so excited to see you again!</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.subText}>ACCOUNT INFORMATION</Text>
        <Input
          textInputProps={{
            placeholder: 'Email or Phone Number',
            autoCapitalize: 'none',
            autoFocus: true,
            keyboardAppearance: 'dark',
            value: user,
            onChangeText: userChange,
          }}
          error=""></Input>
        <Input
          type="password"
          textInputProps={{
            placeholder: 'Password',
            autoCapitalize: 'none',
            keyboardAppearance: 'dark',
            textContentType: 'password',
            value: password,
            onChangeText: passwordChange,
          }}
          error=""></Input>
        <Button onPress={() => 'LogIn'} style="primary">
          Login
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.dark,
    padding: 16,
    paddingTop: 32,
  },
  contentContainer: {
    width: '100%',
    margin: 8,
  },
  formContainer: {
    width: '100%',
    marginVertical: 24,
  },
  header: {
    fontSize: theme.typography.size.subHeader,
    color: theme.colors.light,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: theme.typography.size.text,
    color: theme.colors.light_accent,
    textAlign: 'center',
  },
  subText: {
    fontSize: theme.typography.size.subText,
    color: theme.colors.light,
    fontWeight: '800',
    marginBottom: 8,
  },
});
export default Login;
