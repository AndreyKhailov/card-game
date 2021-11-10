// import firebase from 'firebase/compat/app';
// import 'firebase/compat/database';

// const firebaseConfig = {
//   apiKey: 'AIzaSyA7NgFky_QwA2UvwovY0Dry1qg1NjtoTuU',

//   authDomain: 'card-game-edbf6.firebaseapp.com',

//   databaseURL: 'https://card-game-edbf6-default-rtdb.firebaseio.com',

//   projectId: 'card-game-edbf6',

//   storageBucket: 'card-game-edbf6.appspot.com',

//   messagingSenderId: '1081065656480',

//   appId: '1:1081065656480:web:c91653ee970cc2f229b9c5',
// };

// firebase.initializeApp(firebaseConfig);

class FireBase {
  constructor() {
    this.host = `https://card-game-fa17c-default-rtdb.firebaseio.com/`;
    this.localID = null;
  }

  token = () => localStorage.getItem('idToken');

  setLocalID = (localId) => {
    this.localID = localId;
  };

  checkLocalID() {
    if (!this.localID) {
      throw {
        msg: 'LocalID is does not exist',
      };
    }
  }

  getCards = async () => {
    try {
      this.checkLocalID();

      const res = await fetch(`${this.host}/${this.localID}/cards.json?auth=${this.token()}`);

      return res;
    } catch (e) {
      console.log('error', e);
    }
  };

  addCard = async (data) => {
    const res = await fetch(`${this.host}/${this.localID}/cards.json?auth=${this.token()}`, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => res.json());

    return res;
  };
}

const FireBaseClass = new FireBase();

export default FireBaseClass;
