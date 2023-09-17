import { toast } from 'react-toastify';
import { initialState } from './initialState';

//actions

export const addContact = newContact => {
  return {
    type: 'contacts/addContact',
    payload: newContact,
  };
};

export const deleteContact = id => {
  return { type: 'contacts/deleteContact', payload: id };
};

//redusers
export const contactsReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case 'contacts/addContact':
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

    case 'contacts/deleteContact':
      return [...state.filter(contact => contact.id !== action.payload)];

    default:
      return state;
  }
};
