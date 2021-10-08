import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cards';
import loginReducer from './login';
import userReducer from './user';

export default configureStore({
  reducer: {
    cards: cardsReducer,
    login: loginReducer,
    user: userReducer,
  },
});
