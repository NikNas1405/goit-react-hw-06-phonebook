import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from '../../redux/contactsSlice';

import { getContacts, getFilter } from 'redux/selectors';

import {
  ContactListStyled,
  ContactListItem,
  ContactListItemText,
  ContactListItemButton,
} from './ContactList.styled.js';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilter);

  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filters.toLowerCase())
  );

  return (
    <ContactListStyled>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactListItemText>
            {name}: {number}
          </ContactListItemText>
          <ContactListItemButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ContactListItemButton>
        </ContactListItem>
      ))}
    </ContactListStyled>
  );
};
