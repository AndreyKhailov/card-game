import { createSlice } from '@reduxjs/toolkit';

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
    handleselectedCards: (state, { payload: { card, key } }) => {
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

    // getCards: (state, action) => ({
    //   ...state,
    //   data: action.payload,
    // }),
  },
});

export const { getCards } = slice.actions;

export const selectCardsLoading = (state) => state.cards.isLoading;
export const selectCardsData = (state) => state.cards.data;

export default slice.reducer;
