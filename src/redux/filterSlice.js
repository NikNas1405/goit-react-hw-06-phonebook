import { initialState } from './initialState';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const filtersSlice = createSlice({
  // Ім'я слайсу
  name: 'filters',
  // Початковий стан редюсера слайсу
  initialState: initialState.filters,
  reducers: {
    setFilters(state, action) {
      // return action.payload;
      return (state = action.payload);
    },
  },
});

export const persistConfig = {
  key: 'filters',
  storage,
};

// Генератори екшенів
export const { setFilters } = filtersSlice.actions;
// Редюсер слайсу
// export const filterReducer = filtersSlice.reducer;
export const filterReducer = persistReducer(
  persistConfig,
  filtersSlice.reducer
);
