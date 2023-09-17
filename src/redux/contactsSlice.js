import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: initialState.contacts,
  reducers: {
    addContact(state, action) {
      const checkName = state.find(
        contact => contact.name === action.payload.name
      );

      const checkNumber = state.find(
        contact => contact.number === action.payload.number
      );

      if (checkName) {
        toast.error(`${action.payload.name} is already in contacts.`);
        return state;
      }
      if (checkNumber) {
        toast.error(`${action.payload.number} is already in contacts.`);
        return state;
      }
      return [...state, action.payload];
    },
    deleteContact(state, action) {
      return [...state.filter(contact => contact.id !== action.payload)];
    },
  },
});

export const persistConfig = {
  key: 'contacts-list',
  storage,
};

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
// export const contactsReducer = contactsSlice.reducer;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
