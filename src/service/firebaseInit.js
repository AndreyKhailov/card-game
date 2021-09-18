import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
//import { getDatabase, ref, set } from 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA7NgFky_QwA2UvwovY0Dry1qg1NjtoTuU',

  authDomain: 'card-game-edbf6.firebaseapp.com',

  databaseURL: 'https://card-game-edbf6-default-rtdb.firebaseio.com',

  projectId: 'card-game-edbf6',

  storageBucket: 'card-game-edbf6.appspot.com',

  messagingSenderId: '1081065656480',

  appId: '1:1081065656480:web:c91653ee970cc2f229b9c5',
};

export const fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();
