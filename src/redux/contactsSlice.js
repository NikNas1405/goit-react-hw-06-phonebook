import { toast } from 'react-toastify';
import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact: {
      reducer(state, action) {
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
      prepare(data) {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      return [...state.filter(contact => contact.id !== action.payload)];
      // const index = state.findIndex(contact => contact.id === action.payload);
      // state.splice(index, 1);
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
