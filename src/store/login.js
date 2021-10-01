import { createSlice } from '@reduxjs/toolkit';

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

    const responce = await fetch(
      isSignIn
        ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA7NgFky_QwA2UvwovY0Dry1qg1NjtoTuU'
        : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7NgFky_QwA2UvwovY0Dry1qg1NjtoTuU',
      requestOptions,
    ).then((res) => res.json());

    dispatch(clearRes());

    if (responce.hasOwnProperty('error')) {
      dispatch(errorRes(responce.error.message));
    } else {
      dispatch(successRes(true));
      dispatch(authentification(true));
      localStorage.setItem('idToken', responce.idToken);
    }
  };

export const exitLogin = () => (dispatch) => {
  localStorage.removeItem('idToken');
  dispatch(authentification(false));
};

export default slice.reducer;
