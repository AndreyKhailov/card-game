import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cards';
import userReducer from './user';

export default configureStore({
  reducer: {
    user: userReducer,
    cards: cardsReducer,
  },
});
