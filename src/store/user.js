import { createSlice } from '@reduxjs/toolkit';
import { NotificationManager } from 'react-notifications';

import FireBaseClass from '../service/firebaseInit';
import request from '../service/request';

import { SIGN_AUTH, SIGN_IN, SIGN_UP } from './constants';

export const slice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    data: {},
  },
  reducers: {
    fetchLoading: () => ({
      isLoading: false,
    }),
    fetchUser: () => ({
      isLoading: true,
    }),
    updateUser: (state, action) => ({
      isLoading: false,
      data: action.payload,
    }),
    removeUser: () => ({
      isLoading: false,
      data: {},
    }),
  },
});

export const { fetchLoading, fetchUser, updateUser, removeUser } = slice.actions;

export const selectUserLoading = (state) => state.user.isLoading;
export const selectUser = (state) => state.user.data;
export const selectLocalID = (state) => state.user.data?.localId;

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
    dispatch(fetchUser());
    const response = await fetch(isSignIn ? SIGN_IN : SIGN_UP, requestOptions).then((res) =>
      res.json(),
    );

    if (response.hasOwnProperty('error')) {
      NotificationManager.error('Ошибка! Повторите снова');
    } else {
      localStorage.setItem('idToken', response.idToken);
      if (!isSignIn) {
        FireBaseClass.setLocalID(response.localId);

        const cardsStart = await request.getStarterKit();

        for (const item of cardsStart.data) {
          await FireBaseClass.addCard(item);
        }
        NotificationManager.success('Поздравляем!', 'Вы успешно зарегистрировались');
      }
      isSignIn && NotificationManager.success('Поздравляем!', 'Вы успешно авторизовались');
      dispatch(fetchLoading());
    }
  };

export const logout = () => async () => {
  localStorage.removeItem('idToken');
  NotificationManager.success('Logout', 'Вы успешно вышли из системы');
};

export const getUserUpdateAsync = () => async (dispatch) => {
  const idToken = FireBaseClass.token();
  if (idToken) {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        idToken,
      }),
    };
    const response = await fetch(SIGN_AUTH, requestOptions).then((res) => res.json());
    if (response.hasOwnProperty('error')) {
      localStorage.removeItem('idToken');
      dispatch(removeUser());
    } else {
      dispatch(updateUser(response.users[0]));
    }
  } else {
    dispatch(removeUser());
  }
};

export const getUserAsync = () => (dispatch) => {
  dispatch(fetchUser());
  dispatch(getUserUpdateAsync());
};

export default slice.reducer;
