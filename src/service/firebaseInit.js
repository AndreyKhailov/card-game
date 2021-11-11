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
      // eslint-disable-next-line no-throw-literal
      throw {
        msg: 'LocalID is does not exist',
      };
    }
  }

  getCards = async () => {
    try {
      this.checkLocalID();
      const res = await fetch(`${this.host}/${this.localID}/cards.json`).then((res) => res.json());
      return res;
    } catch (e) {
      console.log('error', e);
    }
  };

  addCard = async (data) => {
    const res = await fetch(`${this.host}/${this.localID}/cards.json?auth=${this.token()}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    return res;
  };
}

const FireBaseClass = new FireBase();

export default FireBaseClass;
