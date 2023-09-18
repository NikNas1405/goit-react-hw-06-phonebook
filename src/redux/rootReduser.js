import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});
