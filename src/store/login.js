import { createSlice } from '@reduxjs/toolkit';

import FireBaseClass from '../service/firebaseInit';
import { getUserUpdateAsync } from './user';
import { SIGN_IN, SIGN_UP } from './constants';

export const slice = createSlice({
  name: 'login',
  initialState: {
    auth: false,
    error: '',
    success: '',
  },
  reducers: {
    authentification: (state, action) => ({
      ...state,
      auth: action.payload,
    }),
    successRes: (state, action) => ({
      ...state,
      success: action.payload,
    }),
    errorRes: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    clearRes: (state) => ({
      ...state,
      success: '',
      error: '',
    }),
  },
});

export const { errorRes, successRes, clearRes, authentification } = slice.actions;

export const success = (state) => state.login.success;
export const error = (state) => state.login.error;
export const auth = (state) => state.login.auth;

export const submitForm =
  ({ email, password, isSignIn }) =>
  async (dispatch) => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    };

    const response = await fetch(isSignIn ? SIGN_IN : SIGN_UP, requestOptions).then((res) =>
      res.json(),
    );
    console.log('response', response);
    dispatch(clearRes());

    if (response.hasOwnProperty('error')) {
      dispatch(errorRes(response.error.message));
    } else {
      localStorage.setItem('idToken', response.idToken);
      if (!isSignIn) {
        FireBaseClass.setLocalID(response.localId);

        const cardsStart = await fetch(
          'https://reactmarathon-api.herokuapp.com/api/pokemons/starter',
        ).then((res) => res.json());

        for (const item of cardsStart.data) {
          await FireBaseClass.addCard(item);
        }
      }
      dispatch(successRes(true));
      dispatch(authentification(true));
      getUserUpdateAsync();
    }
  };

export const exitLogin = () => (dispatch) => {
  localStorage.removeItem('idToken');
  dispatch(authentification(false));
};

export default slice.reducer;
