import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cards';
import loginReducer from './login';

export default configureStore({
  reducer: {
    cards: cardsReducer,
    login: loginReducer,
  },
});
