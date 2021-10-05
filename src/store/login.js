import { createSlice } from '@reduxjs/toolkit';

import { getUserUpdateAsync } from './user';

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

    const response = await fetch(
      isSignIn
        ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA7NgFky_QwA2UvwovY0Dry1qg1NjtoTuU'
        : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7NgFky_QwA2UvwovY0Dry1qg1NjtoTuU',
      requestOptions,
    ).then((res) => res.json());

    dispatch(clearRes());

    if (response.hasOwnProperty('error')) {
      dispatch(errorRes(response.error.message));
    } else {
      if (!isSignIn) {
        const cardsStart = await fetch(
          'https://reactmarathon-api.herokuapp.com/api/pokemons/starter',
        ).then((res) => res.json());

        for (const item of cardsStart.data) {
          await fetch(
            `https://card-game-edbf6-default-rtdb.firebaseio.com/${response.localId}/cards.json?auth=${response.idToken}`,
            {
              method: 'POST',
              body: JSON.stringify(item),
            },
          );
        }
      }
      dispatch(successRes(true));
      dispatch(authentification(true));
      localStorage.setItem('idToken', response.idToken);
      getUserUpdateAsync();
    }
  };

export const exitLogin = () => (dispatch) => {
  localStorage.removeItem('idToken');
  dispatch(authentification(false));
};

export default slice.reducer;
