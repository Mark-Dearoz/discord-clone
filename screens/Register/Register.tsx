import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import UserForm from './UserForm';
import useInput from '../../hooks/useInput';
import FormContext from '../../context/FormContext';
import DropDown from '../../components/DropDown';
import PasswordForm from './PasswordForm';
import DoBForm from './DoBForm';
import {auth} from '../../firebase/firebase';
import {createUserWithEmailAndPassword} from '@firebase/auth';
import {FirebaseError} from '@firebase/util';
import {useNavigation} from '@react-navigation/core';

const RegisterStack = createNativeStackNavigator();
function Register() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [phone, phoneChange] = useInput('');
  const [phoneCode, phoneCodeChange] = useInput('+1');
  const [mail, mailChange] = useInput('');
  const [nickname, nicknameChange] = useInput('');
  const [password, passwordChange] = useInput('');
  const [dob, dobChange] = useInput(new Date());

  const submitForm = () => {
    if (mail.length > 0) {
      createUserWithEmailAndPassword(auth, mail, password)
        .then(userCredential => console.log(userCredential))
        .catch((error: FirebaseError) => {
          console.log(error.code);
          switch (error.code) {
            case 'auth/weak-password':
              navigation.navigate('password', {
                passwordError: 'Must be 6 or more length',
              });
              break;
            case 'auth/email-already-in-use':
              navigation.navigate('user', {
                emailError: 'Email is already registered',
              });
              break;
            case 'auth/invalid-email':
              navigation.navigate('user', {
                emailError: 'Not a well formed email address',
              });
              break;
          }
        });
    }
  };

  return (
    <FormContext.Provider
      value={{
        phone,
        phoneChange,
        phoneCode,
        phoneCodeChange,
        mail,
        mailChange,
        nickname,
        nicknameChange,
        password,
        passwordChange,
        dob,
        dobChange,
        submitForm,
      }}>
      <RegisterStack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: true}}>
        <RegisterStack.Screen name="user" component={UserForm} />
        <RegisterStack.Screen name="dropdown" component={DropDown} />
        <RegisterStack.Screen name="password" component={PasswordForm} />
        <RegisterStack.Screen name="dob" component={DoBForm} />
      </RegisterStack.Navigator>
    </FormContext.Provider>
  );
}

export default Register;
