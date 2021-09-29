import { createSlice } from '@reduxjs/toolkit';

import FireBaseClass from '../service/firebaseInit';

export const slice = createSlice({
  name: 'cards',
  initialState: {
    isLoading: false,
    data: {},
    error: null,
    selectedCards: {},
  },
  reducers: {
    fetchCards: (state) => ({
      ...state,
      isLoading: true,
    }),
    fetchCardsResolve: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload,
    }),
    fetchCardsReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload,
      error: action.payload,
    }),
    // { payload: { card, key } }
    handleSelectedCards: (state, { payload: { card, key } }) => {
      const newCards = { ...state.selectedCards };
      if (newCards[key]) {
        delete newCards[key];
        return { ...state, selectedCards: newCards };
      }
      newCards[key] = card;
      return { ...state, selectedCards: newCards };
    },
    cleanCards: (state) => ({
      ...state,
      data: {},
    }),
  },
});

export const { fetchCards, fetchCardsResolve, fetchCardsReject, handleSelectedCards, cleanCards } =
  slice.actions;

export const selectCardsLoading = (state) => state.cards.isLoading;
export const selectCardsData = (state) => state.cards.data;
export const selectedCards = (state) => state.cards.selectedCards;

export const getCardsAsync = () => async (dispatch) => {
  dispatch(fetchCards());
  const data = await FireBaseClass.getCardsOnce();
  dispatch(fetchCardsResolve(data));
};

export default slice.reducer;
