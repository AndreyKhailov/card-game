import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import cardsReducer from './cards';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cards: cardsReducer,
  },
});
