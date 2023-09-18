import { initialState } from './initialState';
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState.filters,
  reducers: {
    setFilters(state, action) {
      return action.payload;
    },
  },
});

// Генератори екшенів
export const { setFilters } = filtersSlice.actions;

// Редюсер слайсу
export const filterReducer = filtersSlice.reducer;
