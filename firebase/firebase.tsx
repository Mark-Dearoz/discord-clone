import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCMZsTKsbBSQYZaKRzuew9xUgOrkqlqyIM',
  authDomain: 'discord-clone-9d8a8.firebaseapp.com',
  projectId: 'discord-clone-9d8a8',
  storageBucket: 'discord-clone-9d8a8.appspot.com',
  messagingSenderId: '64264915378',
  appId: '1:64264915378:web:b0b6fc81d21235d857bcab',
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
