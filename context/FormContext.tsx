import {createContext} from 'react';

type Form = {
  phone: string;
  phoneChange: (text: string) => void;
  phoneCode: string;
  phoneCodeChange: (text: string) => void;
  mail: string;
  mailChange: (text: string) => void;
  nickname: string;
  nicknameChange: (text: string) => void;
  password: string;
  passwordChange: (text: string) => void;
  dob: Date;
  dobChange: (date: Date) => void;
  submitForm: () => void;
};

const FormContext = createContext<Form>({
  phone: '',
  phoneChange: () => {},
  phoneCode: '',
  phoneCodeChange: () => {},
  mail: '',
  mailChange: () => {},
  nickname: '',
  nicknameChange: () => {},
  password: '',
  passwordChange: () => {},
  dob: new Date(),
  dobChange: () => {},
  submitForm: () => {},
});

export default FormContext;
